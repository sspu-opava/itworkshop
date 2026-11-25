---
title: "Po??ta?ov? detektiv: p??kazov? ??dek"
description: "Prozkoumej po??ta?ov? informace a s?? bezpe?n?mi p??kazy i simul?torem."
topic: hardware
tags: ["Windows","CMD","s??","termin?l"]
difficulty: zacatecnik
ageMin: 12
durationMinutes: 75
featured: false
draft: false
updatedAt: "2026-11-25"
---
Počítač má vlastní jméno, operační systém, paměť, disky a síťovou adresu. Dokážeš zjistit, kudy putuje požadavek na webový server nebo které programy právě běží? Nepotřebuješ žádný speciální nástroj: stačí příkazový řádek Windows (CMD).

**Pro koho:** 7.–9. třída, bez předchozích znalostí. **Čas:** 60–90 minut. Cílem je porozumět výstupům, ne memorovat příkazy.

## 1. Otevři terminál

Stiskni Win+R, napiš `cmd` a potvrď Enter. Objeví se výzva například `C:\Users\Student>`. Napiš příkaz za znak `>` a stiskni Enter. Samotnou výzvu neopisuj. Příkazy zde nevyžadují oprávnění správce; na školním počítači respektuj pravidla učitele. Nepublikuj snímky se skutečnými jmény, IP nebo MAC adresami. Pracuj pouze s vlastním počítačem a povolenými cíli. Neprováděj skenování cizích sítí.

```cmd
ver
hostname
whoami
```

`ver` zobrazí verzi Windows, `hostname` jméno počítače a `whoami` aktuální účet. Výstup `SKOLA-PC\student` znamená účet student na počítači nebo v doméně SKOLA-PC. Jde o ilustraci, nikoli skutečné údaje.

Nápovědu získáš například příkazem `ipconfig /?`. Příkaz `cls` vyčistí obrazovku, nikoli soubory. Šipka nahoru vyvolá předchozí příkaz. Ctrl+C obvykle přeruší běžící příkaz.

## 2. Co je uvnitř počítače?

```cmd
systeminfo
```

Vyčkej na výpis. Vyhledej název a verzi OS, typ systému, model počítače, procesory a celkovou fyzickou paměť. Dostupná paměť se během práce mění. Údaje o procesoru ve výpisu nemusí obsahovat všechny podrobnosti.

Pro detailnější přehled lze z CMD zavolat PowerShell (jde o jiný interpret příkazů):

```cmd
powershell -NoProfile -Command "Get-CimInstance Win32_Processor | Select-Object Name,NumberOfCores,NumberOfLogicalProcessors"
powershell -NoProfile -Command "Get-PSDrive -PSProvider FileSystem | Select-Object Name,Used,Free"
```

Jádro je fyzická výpočetní jednotka; logické procesory jsou výpočetní prostředky viditelné systému. U disků jsou Used a Free obvykle v bajtech; 1 GiB = 1 073 741 824 bajtů. Nepoužíváme zastarávající WMIC.

**Mise:** Zapiš počet jader a logických procesorů a porovnej s údaji ve Správci úloh (Ctrl+Shift+Esc, Výkon).

## 3. Které programy běží?

```cmd
tasklist
tasklist /fi "IMAGENAME eq notepad.exe"
```

Ve výpisu je název procesu, PID (identifikátor procesu) a údaj o paměti. Spusť Poznámkový blok, zopakuj příkaz a porovnej stav po jeho zavření. Více procesů může patřit jedné aplikaci. PID se může po novém spuštění změnit. Filtr na notepad.exe nemusí najít proces, pokud má daná verze aplikace jiný název; pak použij úplný výpis. Neukončuj systémové procesy.

## 4. Jakou adresu má počítač?

```cmd
ipconfig
ipconfig /all
```

Vyhledej aktivní adaptér Wi-Fi nebo Ethernet. IPv4 je adresa rozhraní, maska určuje rozsah místní sítě, výchozí brána zpravidla vede do dalších sítí. DNS překládá doménová jména na adresy. DHCP automaticky poskytuje síťovou konfiguraci. Fyzická adresa (MAC) identifikuje síťové rozhraní na linkové vrstvě; může být randomizovaná. Počítač může mít více rozhraní i adres.

![Schéma domácí sítě](/cmd-lab/sit.svg)

Ukázka: IPv4 `192.168.1.42`, maska `255.255.255.0`, brána `192.168.1.1`. V takové síti je adresa sítě 192.168.1.0/24. Soukromá IPv4 není totéž co veřejná IP adresa internetového připojení.

**Mise:** Najdi aktivní adaptér a zjisti, zda používá DHCP. Skutečné adresy si nech pouze pro vlastní práci.

## 5. Odpovídá síť?

```cmd
ping 127.0.0.1
ping -n 4 example.com
```

První příkaz testuje místní síťový zásobník (loopback), nikoli internet. Druhý posílá čtyři ICMP požadavky na ukázkovou doménu, pokud to školní pravidla dovolují. Sleduj čas v ms, počet odeslaných a přijatých paketů a ztráty. Čas je doba cesty tam i zpět (RTT), nikoli rychlost stahování. Neodpovídající server nemusí být vypnutý: ICMP může blokovat firewall. Použij jen krátké testy, nikoli nepřetržité zatěžování.

![Cesta požadavku a odpovědi](/cmd-lab/ping.svg)

**Mise:** Porovnej loopback s povolenou vzdálenou adresou. Vysvětli, proč jsou časy odlišné.

## 6. Jak DNS funguje?

```cmd
nslookup example.com
```

Výpis ukazuje použitý DNS server a odpověď s adresou či adresami domény. Mohou se objevit IPv4 i IPv6. Neautoritativní odpověď není chyba: odpověď může pocházet z rekurzivního resolveru a jeho cache. Jedna doména může mít více adres a ty se mohou měnit.

**Mise:** Porovnej DNS odpověď s názvem uvedeným ve výstupu ping. Není nutné, aby byly adresy totožné.

## 7. Kudy cestují pakety?

```cmd
tracert -d -h 12 -w 1000 example.com
```

Tracert postupně zvyšuje hodnotu TTL (u IPv6 Hop Limit) a z odpovědí zjišťuje mezilehlé směrovače. `-d` vypne překlad adres na jména, `-h 12` omezuje počet kroků, `-w 1000` čekání na jednotlivou odpověď. Každý řádek představuje jeden krok, obvykle se třemi pokusy. Hvězdička znamená, že odpověď nepřišla v limitu, nikoli nutně poruchu. Trasa může být neúplná nebo se měnit; nemusí odpovídat fyzické mapě kabelů.

## 8. S kým počítač komunikuje?

```cmd
netstat -ano
netstat -e
```

`-a` zobrazí aktivní spojení a naslouchající porty, `-n` číselné adresy a porty, `-o` PID. TCP stav ESTABLISHED znamená navázané spojení, LISTENING čekání na příchozí spojení. UDP nemá stejné stavy jako TCP. Port je číslo komunikačního koncového bodu; například 443 se běžně používá pro HTTPS. Samotný port nedokazuje obsah komunikace ani škodlivost procesu.

Ukázkový řádek (fiktivní): `TCP 192.168.1.42:51000 203.0.113.10:443 ESTABLISHED 4242`.

PID lze vyhledat ve vlastním počítači (nahraď 4242 skutečným PID):

```cmd
tasklist /fi "PID eq 4242"
```

`netstat -e` ukazuje kumulativní statistiky ethernetového rozhraní, nikoli přímý výpis obsahu paketů. Zopakuj výpis před a po otevření povolené webové stránky; rozdíl může zahrnovat i jiný provoz na počítači.

**Mise:** Najdi jedno TCP spojení a jeho proces. Nezveřejňuj adresy a nevyvozuj z nich identitu uživatele.

## 9. Přehled směrování a sousedů (bonus)

```cmd
route print
arp -a
```

První výpis ukazuje směrovací tabulku, druhý cache známých IPv4 sousedů a jejich MAC adres. ARP cache není seznam všech zařízení v síti. Neprováděj změny směrování ani aktivní vyhledávání dalších zařízení.

## 10. Linux ve VirtualBoxu

V Linux Mint otevři Terminál. Příkazy se liší, principy zůstávají stejné.

| Windows CMD | Linux | Účel |
|---|---|---|
| ver | uname -r | verze systému/jádra (odlišné údaje) |
| hostname | hostname | jméno počítače |
| whoami | whoami | účet |
| systeminfo | lscpu; free -h | CPU a paměť |
| tasklist | ps -ef | procesy |
| ipconfig | ip addr | adresy |
| route print | ip route | směrování |
| ping -n 4 example.com | ping -c 4 example.com | čtyři požadavky |
| nslookup example.com | getent ahosts example.com | překlad jména (getent může využívat i jiné zdroje než DNS) |
| netstat -ano | ss -tunap | sockety a procesy (některé PID nemusí být dostupné) |
| arp -a | ip neigh | sousedé |

Virtuální stroj s NAT může mít jinou adresu než hostitel. Porovnej je bez změny síťového nastavení.

## 11. Laboratoř a závěrečná mise

[Otevři simulátor CMD](/cmd-lab/index.html). Používá pouze fiktivní údaje, nepřistupuje k systému ani síti. Vyzkoušej známé příkazy a zjisti, co znamenají. [Ověř si znalosti v kvízu](/cmd-lab/quiz.html) nebo přejdi na [detail kvízu v katalogu](/kvizy/prikazovy-radek/).

Vytvoř krátkou zprávu počítačového detektiva: verze OS, počet jader, paměť, jeden běžící proces, typ aktivního adaptéru, výsledek ping a vysvětlení DNS. Adresy a jména anonymizuj. U každé hodnoty uveď příkaz a vlastní interpretaci. [Pracovní list](/cmd-lab/pracovni-list.md).

## 12. Když něco nefunguje

Příkaz nenalezen: zkontroluj pravopis a zda jsi v CMD, ne v jiném shellu. Přístup odepřen: nepřecházej na správce bez svolení. DNS chyba: ověř připojení a zeptej se učitele. Timeout: server nemusí odpovídat na ICMP. Pomalý výpis: vyčkej nebo použij Ctrl+C. Na školním počítači mohou být některé příkazy zablokovány; využij simulátor.

Další dokumentace: [Windows commands](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands).
