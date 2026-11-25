# ITWORKSHOP.CZ – instrukce pro Codex

## Cíl a pracovní postup
Implementuj kompletní český statický vzdělávací portál pro žáky 7.–9. tříd ZŠ (12–15 let), nikoliv pouze maketu. Vycházej ze souborů SPECIFIKACE.md, OBSAH.md a design/homepage-reference.png. Originální design/logo.svg používej beze změny, obrázek homepage je pouze vizuální reference. Nezaměňuj logo za text ani nepoužívej screenshot jako pozadí celé stránky.

Nejdříve prozkoumej stávající repozitář, zachovej funkční části a vytvoř plán v docs/PLAN.md. Poté realizuj všechny etapy specifikace. Po každé etapě spusť příslušné kontroly a vytvoř samostatný commit, pokud je Git dostupný. Nepřepisuj nesouvisející změny. Zaznamenávej rozhodnutí a odchylky do docs/DECISIONS.md. Nezveřejňuj web ani neupravuj DNS bez souhlasu správce. Nepoužívej tajné klíče, placená API ani backend. Na konci uveď skutečné výsledky testů a zbývající omezení; neprohlašuj neprovedené testy za úspěšné.

## Závazné zásady
- Čeština s diakritikou, srozumitelný a respektující tón, nikoliv infantilní styl.
- Astro, TypeScript strict, Tailwind CSS 4, npm, statický výstup, Pagefind.
- Obsah oddělený od šablon; žádné mrtvé odkazy, falešné termíny, kontakty či reference.
- Přístupnost, mobilní zobrazení, ochrana soukromí nezletilých.
- První kurz se jmenuje přesně „Vyzkoušej si Python“, Scratch není mezi doporučenými kurzy.
- Všechny zveřejněné interaktivní moduly musí fungovat; připravované označ pravdivě.
