## Leírás

Egy NestJS-en alapuló akalmazás, amely egy TypeScript alkalmazás dokumentálását hivatott bemutatni.

## Telepítési lépések

Előfeltételek:

* NodeJS 18.16 (LTS)
* Telepített MySQL / MariaDB

Az alkalmazás telepítéséhez adjuk ki az alábbi utasítást:

```bash
npm install
```

Az .env.example fájlról készítsünk egy másolatot .env néven, és szerkesszük át, ha szükséges:

```
PORT=3000             # Az alkalmazás ezen a proton fog futni
DB_HOST=localhost     # Az adatbázis ezen a szerveren fut (hostnév v. IP-cím)
DB_PORT=              # Az adatbázis ezen a porton figyel (üresen hagyva az alapértelmezett 3306)
DB_USERNAME=root      # Az adatbázis-kapcsolathoz használt felh. név
DB_PASSWORD=          # Az adatbázis-kapcsolathoz használt jelszó
DB_DATABASE=database  # Az adatbázis neve
```

## Az alkalmazás futtatása

```bash
# Hagyományos módban
npm run start

# Fejlesztői módban
npm run start:debug

# Production módban
npm run start:prod
```

## Egységtesztek futtatása

```bash
npm run test
```

## Dokumentáció generálása

### TypeScript API (osztályok metódusok)

A repó tartalmazza a dokumentációt, amely a docs/index.html fájlból érhető el.

Ha módosítunk a programkódon, az alábbi utasítással generálhatjuk újra:

```bash
npx typedoc --entryPointStrategy expand src
```

### REST API

A REST API dokumentációja az alkalmazás részeként érhető el.

Az alkalmazás elindítása után, a böngészőben navigáljunk a http://localhost:3000/doc oldalra, ahol megtalálható minden API végpont és a paraméterek leírása.


