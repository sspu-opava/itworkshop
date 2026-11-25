(() => {
const mode = document.currentScript.dataset.mode, ex = window.EXAMPLES;
const $ = id => document.getElementById(id), sel = $('example'), code = $('code'), status = $('status'), out = $('output');
for (const e of ex) { const o = new Option(e.title,e.id); sel.add(o); }
function current(){return ex.find(e=>e.id===sel.value)||ex[0]}
function stop(){out.replaceChildren();const p=document.createElement('p');p.textContent='Běh zastaven. Stiskni Spustit.';out.append(p);}
function load(){stop();const e=current();code.value=e.code;$('download').href='examples/'+e.id+(mode==='p5'?'.js':'.py');status.textContent=e.localOnly?'Doporučeno spustit lokálně v Pythonu.':'';}
function fromHash(){const id=location.hash.slice(1);sel.value=ex.some(e=>e.id===id)?id:ex[0].id;load();}
sel.addEventListener('change',()=>{location.hash=sel.value;load()});window.addEventListener('hashchange',fromHash);
$('reset').onclick=load;$('stop').onclick=()=>{stop();status.textContent='Zastaveno.'};$('copy').onclick=async()=>{try{await navigator.clipboard.writeText(code.value);status.textContent='Kód zkopírován.'}catch{code.select();status.textContent='Kód označen; stiskni Ctrl+C.'}};
function safeJSON(s){return JSON.stringify(s).replace(/</g,'\\u003c')}
$('run').onclick=()=>{
 stop();const f=document.createElement('iframe');f.title='Výsledek programu';f.setAttribute('sandbox','allow-scripts allow-modals');f.referrerPolicy='no-referrer';
 const head='<!doctype html><html lang="cs"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src \'none\'; script-src \'unsafe-inline\' \'unsafe-eval\' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net; style-src \'unsafe-inline\'; img-src data: blob:; connect-src \'none\'; form-action \'none\'; base-uri \'none\'"><style>body{margin:8px;font:14px system-ui;color:#111827}canvas{max-width:100%;height:auto!important;outline-offset:2px}pre{white-space:pre-wrap;color:#b91c1c}#turtle{overflow:auto;max-width:100%}</style><body><pre id="err" role="status"></pre><div id="turtle"></div><script>window.addEventListener("error",e=>document.getElementById("err").textContent=e.message);window.addEventListener("unhandledrejection",e=>document.getElementById("err").textContent=String(e.reason));<\/script>'.replace(/<\\\/script>/g,'</script>');
 const close='</scr'+'ipt>';
 if(mode==='p5'){
 const script='try{if(typeof p5==="undefined")throw Error("Knihovna p5.js se nenačetla.");const s=document.createElement("script");s.textContent='+safeJSON(code.value)+';document.body.append(s);document.addEventListener("keydown",e=>{if(e.key.startsWith("Arrow"))e.preventDefault()});}catch(e){document.getElementById("err").textContent=String(e)}';
 f.srcdoc=head+'<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.3/p5.min.js">'+close+'<script>'+script+close;
 }else{
 const script='try{if(typeof Sk==="undefined")throw Error("Skulpt se nenačetl.");const output=document.getElementById("err");Sk.configure({__future__:Sk.python3,output:s=>output.textContent+=s,read:n=>{if(!Sk.builtinFiles||!Sk.builtinFiles.files[n])throw Error("Soubor nenalezen: "+n);return Sk.builtinFiles.files[n]},inputfun:p=>window.prompt(p,"6")||"",inputfunTakesPrompt:true,execLimit:10000,yieldLimit:100});(Sk.TurtleGraphics||(Sk.TurtleGraphics={})).target="turtle";Sk.TurtleGraphics.width=600;Sk.TurtleGraphics.height=400;Sk.misceval.asyncToPromise(()=>Sk.importMainWithBody("<stdin>",false,'+safeJSON(code.value)+',true)).catch(e=>output.textContent+=String(e));}catch(e){document.getElementById("err").textContent=String(e)}';
 f.srcdoc=head+'<script src="https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js">'+close+'<script src="https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js">'+close+'<script>'+script+close;
 }
 out.replaceChildren(f);status.textContent='Spuštěno v odděleném rámci. Případné chyby se zobrazí v něm.';
};fromHash();
})();