export type Topic = {
  id: string;
  title: string;
  description: string;
  overview: string;
  icon: "code" | "web" | "palette" | "sparkles" | "cpu" | "shield";
};

export const topics: Topic[] = [
  { id: "programovani", title: "Programování", description: "Proměň nápady v přesné instrukce.", overview: "Programování je způsob, jak převést nápad na přesné instrukce pro počítač. Naučíš se rozdělit problém na menší části, pracovat s proměnnými a rozhodováním a opakovat operace pomocí cyklů. Chyby nejsou konec práce: jsou informací o tom, co ještě potřebuješ upravit. Začni Pythonem nebo robotem v bludišti.", icon: "code" },
  { id: "web", title: "Web", description: "Tvoř stránky, které fungují všude.", overview: "Webovou stránku tvoří obsah, vzhled a chování. HTML popisuje strukturu, CSS určuje vzhled a JavaScript přidává interakci. Vyzkoušej si vytvořit jednoduchou stránku, která bude fungovat i na telefonu, a zjisti, jak se dostane k návštěvníkům přes internet.", icon: "web" },
  { id: "grafika", title: "Grafika", description: "Poznej pixely, barvy a obraz.", overview: "Digitální obraz může být složený z pixelů nebo matematicky popsaných tvarů. Prozkoumej barvy, rozlišení, animaci a rozdíl mezi rastrovým a vektorovým obrázkem. V barevné laboratoři zjistíš, jak displej míchá červenou, zelenou a modrou.", icon: "palette" },
  { id: "ai", title: "Umělá inteligence", description: "Rozuměj schopnostem i limitům AI.", overview: "Umělá inteligence dokáže rozpoznávat vzory v datech, vytvářet texty či obrázky a pomáhat při řešení úloh. Její výsledky ale mohou být nepřesné. Nauč se rozlišovat mezi schopnostmi modelu a jeho omezeními a ověřovat tvrzení pomocí dalších zdrojů.", icon: "sparkles" },
  { id: "hardware", title: "Hardware", description: "Zjisti, co se děje uvnitř počítače.", overview: "Co se děje uvnitř počítače? Procesor vykonává instrukce, operační paměť drží právě používaná data a úložiště uchovává soubory. Prozkoumej, jak počítač reprezentuje čísla pomocí bitů a jak jednotlivé součásti spolupracují.", icon: "cpu" },
  { id: "bezpecnost", title: "Bezpečnost", description: "Chraň sebe i své digitální věci.", overview: "Digitální bezpečnost začíná každodenními rozhodnutími: silná unikátní hesla, vícefaktorové ověření, aktualizace a obezřetnost vůči nečekaným zprávám. Zjisti, jak poznat podvod a proč šifrování pomáhá chránit data.", icon: "shield" },
];
