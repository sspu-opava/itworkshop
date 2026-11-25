<!--
author: ITWORKSHOP
title: Počítačový detektiv: příkazový řádek
language: cs
mode: Textbook
comment: Bezpečné čtení systémových a síťových údajů.
-->

# Počítačový detektiv: příkazový řádek

Příkaz může zjišťovat informaci, ale také měnit počítač. V tomto kurzu pracuj pouze s uvedenými čtecími příkazy. Když si nejsi jistý/á, použij bezpečný [simulátor s fiktivními výstupy](https://sspu-opava.github.io/itworkshop/cmd-lab/index.html); ten žádné systémové příkazy nespouští.

## 1. Zjisti verzi systému

Na vlastním nebo učitelem schváleném počítači může příkaz `ver` zobrazit verzi Windows. Simulátor ukazuje předem připravenou odpověď.

Která věta popisuje simulátor správně?

[( )] Spouští každý napsaný příkaz ve Windows.
[(X)] Zobrazuje pouze připravené fiktivní odpovědi.
[( )] Připojuje se k cizím počítačům.

## 2. Procesor a paměť

Příkazy `systeminfo` nebo `wmic` se mohou podle verze Windows lišit. Nepokoušej se získat oprávnění správce; vystač s údaji dostupnými ve škole nebo v simulátoru.

## 3. Procesy

`tasklist` vypíše procesy. Výpis může obsahovat názvy programů nebo ID procesů. V rámci této úlohy žádný proces neukončuj.

## 4. Síťové rozhraní

`ipconfig` vypíše místní síťovou konfiguraci. Nezveřejňuj skutečné adresy nebo názvy počítačů.

Jaká informace je citlivá na sdílení veřejně?

[[ (Skutečná místní IP adresa spolu s názvem zařízení) | Název příkazu `ipconfig` | Slovo DNS ]]

## 5. Odezva a DNS

`ping 127.0.0.1` zkouší místní síťovou smyčku. `nslookup example.com` se ptá na překlad ukázkové domény. Skutečný vzdálený ping pouštěj jen tehdy, pokud to dovolují školní pravidla.

```cmd
ping 127.0.0.1
nslookup example.com
```

## 6. Trasa a spojení

`tracert` a `netstat` mohou ukazovat síťové cesty nebo spojení. Část odpovědí může být skrytá firewallem; chybějící odpověď sama o sobě neprokazuje poruchu.

## 7. Zpráva detektiva

Do [pracovního listu](https://sspu-opava.github.io/itworkshop/cmd-lab/pracovni-list.md) napiš příkaz, pozorovaný výsledek a vlastní vysvětlení. Skutečné výstupy anonymizuj. Porovnej s [kvízem](https://sspu-opava.github.io/itworkshop/cmd-lab/quiz.html).

### Ověř si bezpečný postup

Co uděláš, když příkaz nebo síťový cíl neznáš?

[( )] Spustíš ho s oprávněním správce.
[(X)] Zastavíš se a ověříš postup u učitele.
[( )] Zkusíš příkaz na náhodném zařízení.

## Zdroje

- [Oficiální dokumentace příkazů Windows](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands)
- [Simulátor](https://sspu-opava.github.io/itworkshop/cmd-lab/index.html) · [Kvíz](https://sspu-opava.github.io/itworkshop/cmd-lab/quiz.html) · [Kurz na webu](https://sspu-opava.github.io/itworkshop/kurzy/pocitacovy-detektiv-cmd/)
