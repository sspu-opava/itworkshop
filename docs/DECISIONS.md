# Rozhodnutí při realizaci

- Web vzniká jako lokální statický projekt. Pokyn v `AGENTS.md` nepovoluje zveřejnění bez souhlasu správce.
- Původní SVG logo se použije beze změny. Barvy z jeho zdroje jsou námořnická `#003399` a tyrkysová `#00CCFF`; akční modrá bude `#064BDB` podle specifikace.
- Náhled úvodní stránky je jen kompoziční reference; nebude použit jako plošné pozadí ani zdroj obrázků.
- Hero fotografie je nově generovaná ilustrativní fotografie fiktivních dospívajících. Nejde o skutečné žáky ani o tvrzení o konkrétním workshopu.
- Doporučené kurzy jsou Python, tvorba webu a AI podle textové specifikace. Scratch může být uveden pouze jako externí volitelný zdroj.
- Obsah zůstane oddělený v typovaných Astro content collections. Workshop a kurzové materiály budou označeny podle skutečného stavu; nepřidají se neověřené termíny ani kontakty.
- Nebudou použity účty, analytika, marketingové cookies, veřejný formulář ani placené služby/API. Výsledky interakcí zůstávají v prohlížeči.
- Pro tvorbu a CI se volí Node.js 26.13.1 LTS a npm. Verze budou uvedeny v `.nvmrc`, `package.json` a README.
- Související materiály se řadí podle shody tématu a štítků; aktuální položka a duplicitní URL se vynechají.
- Produkční hledání používá lokální Pagefind index bez automatického načítání externích služeb. Vyhledávání a 404 nejsou zahrnuté v sitemap.
- Workflow GitHub Pages je připravené podle aktuální dokumentace akcí GitHub, ale nebude spuštěné ani odeslané do vzdáleného repozitáře v rámci této práce.
- LiaScript/Pyodide se spouští až po výslovném kliknutí na externí odkaz. Kurz je možné stáhnout a použít s lokálním Pythonem, pokud vzdálený runtime není dostupný.
