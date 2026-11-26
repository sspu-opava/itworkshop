<!--
author: ITWORKSHOP
title: Počítač uvnitř počítače: VirtualBox a Linux
language: cs
mode: Textbook
comment: Plánování bezpečné VM, Linux a návrat ke snímku.
-->

# Počítač uvnitř počítače: VirtualBox a Linux

Virtuální počítač používá část procesoru, paměti a disku skutečného hostitele. Kurz nejprve pracuje s bezpečnými simulacemi. Instalaci skutečného systému prováděj jen se souhlasem správce zařízení a pod dohledem učitele.

## 1. Hostitel, host a hypervizor

Hostitel je skutečný počítač. VirtualBox je hypervizor. Hostovaný systém běží ve virtuálním stroji a používá virtuální disk jako soubor.

Virtuální stroj dostane 4 GB z 16 GB RAM hostitele. Kolik fyzické RAM tím počítač získá?

[( )] Další 4 GB.
[(X)] Žádnou novou RAM; jen část existující paměti vyhradí hostu.
[( )] Dvojnásobek původní paměti.

## 2. Naplánuj zdroje

Otevři [plánovač virtuálního počítače](https://itworkshop.cz/virtualbox-linux/planovac.html). Zkus rozdělit procesor, RAM a disk. Model pouze počítá orientační hodnoty; nečte skutečný hardware.

Nejdřív předpověz, co se stane, když hostu přidělíš téměř všechnu paměť. Potom změň hodnotu a vysvětli výsledek.

## 3. ISO a virtuální disk

ISO je obraz instalačního média. VDI je soubor virtuálního disku. Pokud plánuješ instalaci, ověř v okně VM, že cílem je nový prázdný virtuální disk.

Který cíl je při instalaci do VM správný?

[[ (Nový prázdný VDI připojený k virtuálnímu stroji) | Fyzický disk hostitele | Neznámý oddíl ve Windows ]]

## 4. Live režim a terminál

Linux Mint lze nejprve vyzkoušet v live režimu z ISO. Příkazy pro tvorbu souborů používej jen uvnitř připravené VM a ve vlastní cvičné složce. Nepřipojuj USB, fyzické disky ani sdílené adresáře.

```bash
mkdir -p ~/linux-lab
cd ~/linux-lab
printf 'Ahoj, Linux!\n' > pozdrav.txt
cat pozdrav.txt
```

## 5. Snímky stavu

Snímek zachytí stav virtuálního stroje. Vyzkoušej [simulaci snímků](https://itworkshop.cz/virtualbox-linux/snimky.html): vytvoř bod návratu, změň testovací soubor a vrať předchozí stav.

Snímek VM není nezávislá záloha. Závisí na souborech VM a jeho obnovení zahodí pozdější změny.

## 6. Shrnutí a ověření

Vyplň [pracovní list](https://itworkshop.cz/virtualbox-linux/pracovni-list.md) a potom otevři [kvíz](https://itworkshop.cz/virtualbox-linux/quiz.html). U každého rozhodnutí vysvětli, jak poznáš, že změna míří do virtuálního disku.

### Bezpečnostní kontrola

Když instalátor zobrazí disk, který nepoznáváš, co uděláš?

[( )] Potvrdíš volbu a budeš pokračovat.
[(X)] Zastavíš instalaci a zavoláš učitele.
[( )] Odpojíš fyzický disk za chodu počítače.

## Zdroje

- [Dokumentace VirtualBoxu](https://docs.oracle.com/en/virtualization/virtualbox/7.2/user/)
- [Instalační průvodce Linux Mint](https://linuxmint-installation-guide.readthedocs.io/en/latest/)
- [Plánovač](https://itworkshop.cz/virtualbox-linux/planovac.html) · [Simulace snímků](https://itworkshop.cz/virtualbox-linux/snimky.html) · [Kurz na webu](https://itworkshop.cz/kurzy/virtualbox-linux/)
