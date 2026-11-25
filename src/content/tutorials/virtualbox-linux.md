---
title: "Po??ta? uvnit? po??ta?e: VirtualBox a Linux"
description: "Prozkoumej virtu?ln? stroj, Linux Mint, termin?l a n?vrat ke sn?mku."
topic: hardware
tags: ["Linux","VirtualBox","opera?n? syst?m"]
difficulty: mirne-pokrocily
ageMin: 13
durationMinutes: 120
featured: false
draft: false
updatedAt: "2026-11-25"
---
Co kdyby sis mohl vyzkoušet úplně jiný operační systém, aniž bys musel přeinstalovat Windows? VirtualBox ti umožní vytvořit virtuální počítač (VM). Ten má vlastní virtuální procesor, paměť, disk a síťovou kartu. Ve skutečnosti využívá prostředky tvého fyzického počítače. Na konci kurzu budeš mít vlastní funkční Linux a několik zkušeností správce systému.

**Čas:** 90–120 minut bez stahování. **Cíl:** instalace Linux Mint, práce se soubory, terminálem a snímky stavu. Návod předpokládá Windows 10/11 na počítači s procesorem Intel nebo AMD (x86-64). Na ARM zařízení, například některých noteboocích a Apple Silicon, tento konkrétní postup nepoužívej.

![Hostitelský a virtuální počítač](/virtualbox-linux/architektura.svg)

## 1. Co vlastně virtualizujeme?

Hostitel (host) je skutečný počítač a jeho operační systém. Hostovaný systém (guest) běží uvnitř virtuálního stroje. VirtualBox je hypervizor, který zprostředkovává využití hardwaru. Virtuální disk VDI je obvykle soubor uložený na disku hostitele. ISO je obraz instalačního média, podobně jako virtuální DVD. Linux je jádro operačního systému; distribuce Linux Mint k němu přidává aplikace a grafické prostředí. Cinnamon je uživatelsky přívětivé prostředí, Xfce je úspornější alternativa.

**Otázka:** Když virtuálnímu počítači přidělíš 4 GB RAM, získá tvůj skutečný počítač další paměť? Ne, virtuální stroj využije část existující paměti.

## 2. Připrav si počítač

Ideálně 16 GB RAM, alespoň 4 logické procesory a 50 GB volného místa; s 8 GB RAM lze zkusit úspornější Xfce s 2–3 GB přidělené RAM, pokud zůstane dostatek pro Windows. Na školním počítači musí instalaci povolit správce. Ve Správci úloh (Ctrl+Shift+Esc), Výkon → Procesor, zkontroluj položku Virtualizace. Pokud je vypnutá, požádej správce; neměň samostatně UEFI, zabezpečení ani školní nastavení.

[Vyzkoušej plánovač virtuálního počítače](/virtualbox-linux/planovac.html). Jde o orientační výukový model, nikoli kontrolu skutečného hardwaru.

## 3. Stáhni VirtualBox a Linux

1. Otevři [VirtualBox Downloads](https://www.virtualbox.org/wiki/Downloads). Vyber balík pro Windows hosts a nainstaluj jej se souhlasem správce. Rozšíření Extension Pack pro kurz nepotřebuješ. Instalace síťových ovladačů může dočasně přerušit připojení.
2. Otevři [Linux Mint Downloads](https://linuxmint.com/download.php). Vyber stabilní 64bitovou edici Cinnamon, případně Xfce. Stáhni soubor ISO z oficiálního zrcadla. Nerozbaluj jej a nevytvářej bootovací USB.
3. Podle [návodu na ověření ISO](https://linuxmint-installation-guide.readthedocs.io/en/latest/verify.html) ověř integritu i pravost obrazu. Ve Windows lze SHA-256 zjistit příkazem PowerShell `Get-FileHash -Algorithm SHA256 "C:\cesta\linuxmint.iso"`; porovnej s ověřeným kontrolním součtem. Samotná shoda s neověřeným součtem nepotvrzuje pravost.

## 4. Vytvoř virtuální počítač

Ve VirtualBox Manageru klikni na New (Nový). Názvy a pořadí voleb se podle verze mohou mírně lišit. Zadej jméno `Mint-laborator`, vyber stažené ISO, typ Linux a odpovídající 64bitový profil Ubuntu, pokud se nenastaví automaticky. Zvol ruční instalaci (Skip Unattended Installation nebo vypni automatickou instalaci), abys viděl jednotlivé kroky.

| Parametr | Doporučená hodnota pro hostitele s 16 GB RAM |
|---|---|
| RAM | 4096 MB |
| CPU | 2 virtuální procesory |
| Disk | nový VDI, dynamicky alokovaný, 35 GB |
| Síť | NAT |
| Grafika | VMSVGA, výchozí nastavení, 3D akcelerace zpočátku vypnutá |

![Nastavení VM](/virtualbox-linux/nastaveni.svg)

Dynamický disk nezačne jako soubor o celé maximální kapacitě; roste podle ukládaných dat. Přesto musí mít hostitel dostatek volného místa i pro aktualizace a snímky. Nepřipojuj skutečné fyzické disky, USB úložiště ani sdílené složky. Sdílenou schránku a drag-and-drop zatím nech vypnuté. NAT umožňuje běžné odchozí připojení, ale není absolutní bezpečnostní izolací.

## 5. Spusť Linux bez instalace

Vyber VM a klikni Start. Pokud se objeví startovací nabídka, vyber Start Linux Mint. Počkej na grafickou plochu. Právě běžíš v režimu Live: Linux se spustil z ISO, ještě není nainstalován na virtuální disk. Prohlédni nabídku aplikací, správce souborů a nastavení. Změny v live režimu se obvykle po restartu ztratí.

![Live a instalace](/virtualbox-linux/live.svg)

## 6. Instaluj Linux na virtuální disk

Na ploše **uvnitř okna virtuálního stroje** otevři Install Linux Mint. Vyber češtinu, rozložení klávesnice a časové pásmo. Multimediální kodeky můžeš pro tento pokus vynechat. U typu instalace vyber vymazání disku a instalaci Linux Mint **pouze po ověření, že jde o nový prázdný virtuální disk VDI o přibližně 35 GB a nejsou připojeny jiné disky**. Pokud vidíš neočekávané disky nebo oddíly, zastav se a požádej učitele. Tuto volbu nikdy nepoužívej v instalátoru spuštěném přímo na fyzickém počítači.

Potvrď změny, vytvoř místní účet (např. `student`) s vlastním heslem, které nepoužíváš jinde. Heslo si bezpečně zapamatuj a nezveřejňuj. Po dokončení klikni Restart Now. Jestliže instalátor vyzve k odebrání média, v nabídce Devices → Optical Drives odeber ISO, případně VM vypni a odeber ISO v Settings → Storage. Neodstraňuj virtuální pevný disk. Spusť systém znovu. Po přihlášení by se měl objevit nainstalovaný Linux.

## 7. První průzkum Linuxu

Otevři nabídku aplikací, správce souborů, textový editor a nastavení vzhledu. V domovské složce vytvoř adresář `ITWORKSHOP`, v něm textový soubor `poznamky.txt`. Napiš do něj tři rozdíly mezi Linuxem a Windows. Restartuj Linux běžnou volbou v nabídce systému a zkontroluj, že soubor zůstal uložený.

**Výzva:** Najdi správce aktualizací, změň tapetu a vyzkoušej kalkulačku. Neinstaluj náhodné balíčky z internetu.

## 8. První příkazy v terminálu

Terminál umožňuje ovládat počítač textovými příkazy. Otevři jej z nabídky nebo zkus Ctrl+Alt+T. Následující příkazy piš postupně, každý potvrď Enterem. Velká a malá písmena se v Linuxu rozlišují.

```bash
pwd
ls
mkdir -p ~/linux-lab
cd ~/linux-lab
printf 'Ahoj, Linux!\n' > pozdrav.txt
cat pozdrav.txt
cp pozdrav.txt kopie.txt
ls -l
```

| Příkaz | Co dělá |
|---|---|
| `pwd` | zobrazí aktuální složku |
| `ls` | vypíše soubory |
| `mkdir` | vytvoří adresář |
| `cd` | přejde do adresáře |
| `printf` | vypíše text; `>` jej zapíše do souboru (přepíše existující obsah) |
| `cat` | zobrazí obsah souboru |
| `cp` | zkopíruje soubor |

Znak `~` označuje domovský adresář. V příkladu pracuj pouze s vlastními cvičnými soubory.

Další experiment: zjisti údaje o systému pomocí `uname -r`, `free -h` a `df -h`. Porovnej dostupnou RAM s nastavením VM. Výpis `free` obsahuje i paměť používanou jako cache; sleduj zejména sloupec available.

## 9. Snímky stavu: cestování v čase

Snapshot zaznamenává stav virtuálního stroje a jeho virtuálních disků. Vypni Linux normálním způsobem, v Manageru vyber VM, otevři Snapshots (Snímky) a vytvoř snímek `Cisty Linux`. Spusť VM, vytvoř soubor `experiment.txt`, změň tapetu a zase ji vypni. Obnov snímek `Cisty Linux` a znovu spusť VM. Co se stalo se souborem a tapetou?

![Princip snímků](/virtualbox-linux/snimky.svg)

Obnovením snímku můžeš přijít o změny vzniklé po jeho vytvoření. Snapshot není nezávislá záloha: je závislý na souborech virtuálního stroje. Před obnovou zachovej důležitá data jiným způsobem. Snímky také spotřebovávají místo na hostiteli.

[Vyzkoušej výukovou simulaci snímků](/virtualbox-linux/snimky.html).

## 10. Další výzvy

- **Detektiv hardwaru:** porovnej počet procesorů, RAM a velikost disku hostitele a hosta. Vysvětli rozdíly.
- **Dvě distribuce:** pokud máš dost místa, vytvoř druhý VM s Xfce a porovnej prostředí. Nespouštěj oba současně na slabém počítači.
- **Bez internetu:** při vypnuté VM odpoj virtuální síťový adaptér (nebo volbu Cable Connected), spusť Linux a zjisti, které aplikace fungují i offline. Potom nastavení vrať.
- **Správce systému:** se souhlasem učitele otevři Update Manager, prohlédni dostupné aktualizace a proveď je z oficiálních repozitářů. Předem vytvoř snímek a ověř volné místo.
- **Vlastní pracovní prostředí:** připrav složku s poznámkami, obrázkem a krátkým popisem svého experimentu. Nepoužívej osobní údaje.

## 11. Když něco nefunguje

| Problém | Co zkontrolovat |
|---|---|
| VM nenastartuje / chybí 64bitový profil | architekturu CPU, povolenou virtualizaci, kompatibilitu hostitele; požádej správce |
| Černá obrazovka | vypni VM, ověř VMSVGA, vypni 3D akceleraci; případně zkus kompatibilní režim v live nabídce |
| Znovu se spouští instalátor | odeber ISO z virtuální optické mechaniky |
| Myš zůstala uvnitř VM | použij zobrazenou Host klávesu (ve Windows obvykle pravý Ctrl) |
| Počítač je pomalý | ukonči jiné aplikace, sniž přidělené prostředky při vypnuté VM, zkus Xfce |
| Internet nefunguje | ověř NAT a připojený virtuální kabel, školní síť může přístup omezovat |
| Malé rozlišení | vyzkoušej nastavení zobrazení v Linuxu; s učitelem případně nainstaluj odpovídající Guest Additions podle dokumentace |

Nevypínej bezpečnostní funkce Windows kvůli VirtualBoxu bez správce. VM není bezpečná laboratoř pro malware. Po skončení vypni hostovaný systém běžnou volbou; násilné vypnutí používej pouze při zamrznutí.

## 12. Ověř si znalosti

[Spusť interaktivní kvíz](/virtualbox-linux/quiz.html) nebo otevři [detail kvízu v katalogu](/kvizy/virtualbox-linux/). Potom vyplň [pracovní list](/virtualbox-linux/pracovni-list.md).

Úspěch: dokážeš rozlišit hostitele a hosta, vytvořit VM, vysvětlit ISO a VDI, nainstalovat Linux, vytvořit soubor v terminálu a obnovit snímek.

## Další zdroje

- [VirtualBox 7.2 – vytvoření VM](https://docs.oracle.com/en/virtualization/virtualbox/7.2/user/create-vm.html)
- [VirtualBox – práce s VM a snímky](https://docs.oracle.com/en/virtualization/virtualbox/7.2/user/working-with-vms.html)
- [Oficiální instalační průvodce Linux Mint](https://linuxmint-installation-guide.readthedocs.io/en/latest/)
- [Linux Mint – dostupné edice](https://linuxmint.com/download.php)

ITWORKSHOP – Objevuj. Experimentuj. Tvoř.
