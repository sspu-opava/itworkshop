---
title: Počítadlo bodů
description: Vypiš průběžný součet bodů po každém z pěti kol.
topic: programovani
tags: [Python, proměnná, cyklus]
difficulty: zacatecnik
ageMin: 12
durationMinutes: 12
featured: true
draft: false
updatedAt: "2026-11-25"
prompt: Hráč získává v pěti kolech po třech bodech. Vypiš průběžný součet po každém kole.
hint: Začni proměnnou body na nule. V každém opakování přičti tři.
solution: >-
  body = 0
  for kolo in range(5):
      body += 3
      print(body)
  Výstup je 3, 6, 9, 12, 15.
extension: Změň počet bodů podle kola nebo přidej součet na konci.
---

Napiš krátký program, který po každém kole vypíše aktuální počet bodů. Ověř, že poslední řádek odpovídá celkovému součtu.
