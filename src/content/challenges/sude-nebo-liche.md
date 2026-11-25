---
title: Sudé, nebo liché?
description: Načti celé číslo a rozhodni, zda je sudé, nebo liché.
topic: programovani
tags: [Python, zbytek po dělení, podmínka]
difficulty: zacatecnik
ageMin: 12
durationMinutes: 10
featured: true
draft: false
updatedAt: "2026-11-25"
prompt: Zadej celé číslo a vypiš, zda je sudé, nebo liché.
hint: Operátor % vrací zbytek po dělení. Co znamená zbytek nula při dělení dvěma?
solution: >-
  n = int(input("Číslo: "))
  print("Sudé" if n % 2 == 0 else "Liché")
  I záporná sudá čísla mají při dělení dvěma nulový zbytek.
extension: Ošetři neplatný vstup tak, aby program srozumitelně vysvětlil, co čeká.
---

Napiš program, který načte celé číslo a vypíše, zda je sudé, nebo liché. Zkus si nejdřív vybrat několik kladných i záporných čísel a předpovědět výsledek.
