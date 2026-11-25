# Průvodce přidáváním obsahu

Obsah přidávej do kolekce, která odpovídá jeho typu. Kolekce se validují při sestavení webu; neplatná metadata nebo špatná odpověď kvízu zastaví build. ID detailní URL vznikne z názvu souboru, proto používej krátké ASCII názvy bez diakritiky.

## Společná pravidla

Každý materiál má `title`, `description`, `topic`, `tags`, `difficulty`, `ageMin`, `durationMinutes`, `featured`, `draft` a `updatedAt`. Volitelná metadata `cover` a `coverAlt` určují obrázek a jeho alternativní popis; karty kurzů a jejich detail zobrazí odpovídající banner. Povolená témata jsou `programovani`, `web`, `grafika`, `ai`, `hardware`, `bezpecnost`; obtížnosti `zacatecnik`, `mirne-pokrocily`, `pokrocily`. `ageMin` je celé číslo 10–18 a délka je kladný počet minut. `publishedAt` přidávej jen při skutečném zveřejnění. Veřejné routy, katalogy a homepage vynechávají položky s `draft: true`.

## Článek

Vytvoř `src/content/articles/priklad-clanku.md`:

```md
---
title: Jak funguje příklad
description: Krátké shrnutí pro katalog a výsledky hledání.
topic: hardware
tags: [bity, pocitac]
difficulty: zacatecnik
ageMin: 12
durationMinutes: 8
featured: false
draft: true
updatedAt: "2026-11-25"
---

## Vysvětlení

Napiš text po menších odstavcích a přidej konkrétní příklad.

## Vyzkoušej si

Odkazuj na existující materiál pomocí absolutní lokální cesty, například [binární laboratoř](/laborator/binarni/).
```

Datum `updatedAt` přepiš skutečným datem úpravy. Draft přepni na `false`, až je materiál připravený ke kontrole a zveřejnění.

## Kvíz

Vytvoř `src/content/quizzes/priklad-kvizu.json`. Každá otázka má unikátní `id`, alespoň dvě možnosti, platný index správné možnosti a vysvětlení.

```json
{
  "title": "Základy příkladu",
  "description": "Ověř si, jak rozumíš prvnímu pojmu.",
  "topic": "programovani",
  "tags": ["základy"],
  "difficulty": "zacatecnik",
  "ageMin": 12,
  "durationMinutes": 3,
  "featured": false,
  "draft": true,
  "updatedAt": "2026-11-25",
  "questions": [
    {
      "id": "co-dela-priklad",
      "prompt": "Která odpověď je správná?",
      "options": ["První možnost", "Druhá možnost"],
      "correctIndex": 1,
      "explanation": "Vysvětli princip, aby se žák dozvěděl něco i z chybné volby."
    }
  ]
}
```

## Kurz

Kurz v `src/content/courses/` používá YAML frontmatter s `objectives`, `prerequisites`, `lessons` a případnou cestou `coursePath`. Markdownová část detailu popisuje obsah pro katalog, fulltext a návštěvníky, kteří kurz neotevřou externě.

```yaml
objectives:
  - Vysvětlit hlavní pojem vlastními slovy.
prerequisites:
  - Běžná práce s počítačem.
lessons:
  - title: První krok
    description: Krátký příklad a vlastní úkol.
coursePath: /courses/priklad/README.md
```

Soubor v `coursePath` musí být uložen pod `public/`. Python kurz ukazuje vzor odkazu do LiaScriptu; runtime nenačítej automaticky do stránky.

## Experiment

Vytvoř JSON soubor v `src/content/experiments/`. Povolené `componentKey` jsou `binary`, `rgb` a `robot`; přidání nového klíče vyžaduje vlastní komponentu a testy.

```json
{
  "title": "Barevný příklad",
  "description": "Měň složky barvy a sleduj jejich zápis.",
  "topic": "grafika",
  "tags": ["barva", "rgb"],
  "difficulty": "zacatecnik",
  "ageMin": 12,
  "durationMinutes": 10,
  "featured": false,
  "draft": true,
  "updatedAt": "2026-11-25",
  "componentKey": "rgb"
}
```

## Externí zdroje a bezpečné publikování

Odkazy patří do `src/content/links/` ve formátu JSON a musí používat HTTPS. Pole `checkedAt` není součástí schématu; neuváděj tvrzení o ověření, pokud zdroj nebyl skutečně zkontrolován. Externí odkazy, které otevírají novou kartu, musí používat `rel="noopener noreferrer"` a oznámit novou kartu přístupným názvem.

Nepřidávej účty, sběr výsledků, kontaktní formuláře pro nezletilé, osobní údaje, fotografie žáků bez oprávnění ani smyšlená data. Neurčuj licence pro cizí materiály a loga.

## Větve a pull requesty

1. Vytvoř větev pro jednu věcnou změnu, například `content/priklad-clanku`.
2. Projdi text v lokálním náhledu a spusť `npm run check`, `npm test`, `npm run build`, `npm run check:links`.
3. Před změnou interaktivního modulu spusť také `npm run test:e2e:preview` po buildu.
4. Otevři pull request do `main`, popiš změnu a výsledek kontrol. Požaduj odbornou kontrolu před přepnutím draftu na zveřejněný obsah.
5. Zveřejnění a doménu nastavuje správce repozitáře. Do DNS se z vývoje nezasahuje.

## Připravené kurzy a aktivity

Materiály z `priprava/` patří do odpovídajících kolekcí `courses`, `tutorials`, `quizzes` a `experiments`. Jejich obrázky, HTML editory, simulátory, pracovní listy, texty a původní kvízy se ukládají do `public/` pod cestu, kterou používají zdrojové odkazy. Statické aktivity se servírují přímo; jejich skripty se nezapojují do Astro aplikace.

Kurz může v metadatech uvést `coursePath: /courses/.../README.md`. Detail kurzu nabídne otevření v LiaScriptu a stažení Markdown zdroje. Interaktivní Python příklady používají Pyodide až v otevřeném kurzu; statický web nespouští interpreter při načtení stránky. U dalších kurzů jsou připravené editory a simulátory propojené odkazy v obsahu.

Kvíz může mít vlastní pole `questions`, `liaScriptPath`, `liaScriptGradedPath` nebo `activityPath`. Musí obsahovat otázky nebo alespoň cestu k interaktivní aktivitě. Detail kvízu nabídne běžný LiaScript, případnou bodovanou variantu a připravený HTML kvíz. Bodovaná varianta zůstává klientská; nejde o zabezpečený zkouškový systém.

Laboratoř může použít `componentKey: liascript` a `liaScriptPath`. Jednotlivé praktické experimenty v souboru `*-EXPERIMENTY.md` drží strukturu `Cíl / Nástroj / Úkoly / Výstupy`, vysvětlující a proveditelný postup, bezpečnost, fallback a úklid. V tomto webu rozšiřuje katalog šest experimentů s AI. Před úpravou dalších laboratoří spusť validátor popsaný ve skillu `liascript-experiment-labs` a každou část projdi ručně.

Při výuce s veřejnou AI službou dodrž aktuální podmínky poskytovatele a školní pravidla. Nepoužívej soukromé dokumenty, osobní údaje ani cizí hlasy a texty bez potřebného oprávnění. Klíč k tematickým testům `klic.md` se do `public/` nekopíruje.
