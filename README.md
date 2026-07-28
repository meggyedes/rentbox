# 🚗 RENTBOX — Tetőbox bérlés és eladás

> **Prémium Thule tetőboxok bérlése és vásárlása — egyszerűen, személyes egyeztetéssel.**

---

## 🇭🇺 Magyar leírás

### Mi ez?

A **RentBox** egy statikus, backend nélküli bemutató weboldal, amelyen prémium **Thule tetőboxokat** lehet bérelni és megvásárolni. Az oldal célja, hogy az érdeklődők könnyen kiválasszák a megfelelő boxot, és e-mailen keresztül ajánlatot kérjenek.

Az oldal teljesen **szerver nélkül** működik: az ajánlatkérő űrlap a látogató saját levelezőjében nyit meg egy előre kitöltött e-mailt, amelyet a bérlő maga küld el.

---

### 📦 Jelenlegi kínálat

| Box | Méret | Kapacitás | Bérleti díj |
|---|---|---|---|
| **Thule Excellence** | 218 × 94 × 40 cm | 520 liter | 5 500 Ft / nap (7+ naptól: 5 000 Ft) |
| **Thule Atlantis 900** | Extra nagy kivitel | 650 liter | 5 000 Ft / nap (7+ naptól: 4 700 Ft) |

- **Minimum bérlési időszak:** 3 nap
- **Kaució:** 40 000 Ft (visszajár, ha a box épségben kerül vissza)
- **Személyi igazolvány és lakcímkártya** szükséges az átvételhez

---

### 🗂️ Fájlstruktúra

```
rentbox/
├── index.html        # Főoldal (bérlés, árak, hogyan működik, kapcsolat)
├── elado.html        # Eladó boxok aloldal
├── styles.css        # Teljes dizájnrendszer (vanilla CSS)
├── script.js         # Navigáció, képgaléria, e-mail logika
└── images/
    ├── web/          # Weboldalon megjelenő optimalizált fotók
    ├── ThuleExcellence/    # Thule Excellence teljes fotógaléria
    └── ThuleAtlantis900/   # Thule Atlantis 900 teljes fotógaléria
```

---

### ✨ Funkciók

- **Reszponzív dizájn** — mobilon és asztali gépen egyaránt tökéletes megjelenés
- **Animált betöltőképernyő** és görgethető megjelenési effektek (Intersection Observer)
- **Lightbox képgaléria** — natív `<dialog>` elemmel, billentyűzetes navigációval
- **Ajánlatkérő űrlap** — `mailto:` linken keresztül, előre kitöltött levéllel nyílik meg a böngészőből
- **Tetőbox választó** — a „Kérek ajánlatot" gomb automatikusan kitölti az üzenetet és az adott boxra görget
- **Eladó aloldal** — önálló oldal (`elado.html`) a megvásárolható boxokhoz
- **SEO-ready** — meta leírások, szemantikus HTML5, egyedi title tagek

---

### 🚀 Élesítés előtt — teendők

> ⚠️ **Kötelező lépés:** Az e-mail cím nincs beállítva. Élesítés előtt cseréld ki!

1. Nyisd meg a [`script.js`](script.js) fájlt.
2. Az **1. sorban** cseréld ki ezt:
   ```js
   const recipientEmail = 'IDE_IRD_A_SAJAT_EMAIL_CIMED@pelda.hu';
   ```
   erre (a saját e-mail címeddel):
   ```js
   const recipientEmail = 'te@sajatcimed.hu';
   ```
3. Mentsd el a fájlt, és töltsd fel a teljes mappát.

---

### ☁️ Telepítés

#### Netlify (ajánlott — ingyenes)

1. Menj a [netlify.com/drop](https://netlify.com/drop) oldalra.
2. Húzd be a teljes `RentBox/` mappát a Drop felületre.
3. Az oldal azonnal élő lesz egy generált URL-en.
4. Opcionálisan add meg a saját domain nevedet a Netlify beállításainál.

#### GitHub Pages

1. Hozz létre egy nyilvános GitHub repository-t.
2. Töltsd fel a fájlokat a `main` branch gyökerébe.
3. A repository **Settings → Pages** menüpontjában állítsd be a forrást: `main` branch, `/ (root)`.
4. Az oldal néhány percen belül elérhetővé válik a `https://felhasznalonev.github.io/repository-nev/` címen.

---

### 🛠️ Technológiák

| Technológia | Leírás |
|---|---|
| HTML5 | Szemantikus struktúra, akadálymentességi attribútumok |
| Vanilla CSS | Egyedi dizájnrendszer, CSS custom properties, animációk |
| Vanilla JavaScript | Galéria, navigáció, form logika — keretrendszer nélkül |
| `<dialog>` API | Natív böngésző modal a képnagyításhoz |
| Intersection Observer | Scroll-alapú megjelenési animációk |

---

### 📄 Licenc

Ez a projekt személyes/üzleti célra készült. Másolás vagy továbbterjesztés csak a szerző engedélyével lehetséges.

---
---

# 🚗 RENTBOX — Rooftop Box Rental & Sales

> **Premium Thule rooftop boxes for rent or purchase — simple, personal, transparent.**

---

## 🇬🇧 English Description

### What is this?

**RentBox** is a static, backend-free website for renting and purchasing premium **Thule rooftop cargo boxes**. Visitors can browse available boxes, view photo galleries, check pricing, and send a rental inquiry — all without any server-side infrastructure.

The contact form works via a `mailto:` link: clicking "Send Inquiry" opens the visitor's default email client with a pre-filled message ready to send.

---

### 📦 Available Products

| Box | Dimensions | Capacity | Rental Price |
|---|---|---|---|
| **Thule Excellence** | 218 × 94 × 40 cm | 520 litres | 5,500 HUF / day (7+ days: 5,000 HUF) |
| **Thule Atlantis 900** | Extra-large build | 650 litres | 5,000 HUF / day (7+ days: 4,700 HUF) |

- **Minimum rental period:** 3 days
- **Security deposit:** 40,000 HUF (fully refunded upon undamaged return)
- **ID card and address card** required at pickup

---

### 🗂️ Project Structure

```
rentbox/
├── index.html        # Main page (rental, pricing, how it works, contact)
├── elado.html        # For-sale boxes subpage
├── styles.css        # Complete design system (vanilla CSS)
├── script.js         # Navigation, image gallery, email logic
└── images/
    ├── web/          # Optimised images used on the website
    ├── ThuleExcellence/    # Full photo gallery — Thule Excellence
    └── ThuleAtlantis900/   # Full photo gallery — Thule Atlantis 900
```

---

### ✨ Features

- **Fully responsive** — looks great on mobile and desktop
- **Animated page loader** and scroll-triggered reveal animations (Intersection Observer API)
- **Lightbox image gallery** — built with the native `<dialog>` element, keyboard navigable, preloads adjacent images
- **Inquiry form** — opens the visitor's email client via `mailto:` with a pre-filled subject and body
- **Box selector** — the "Request Quote" button auto-fills the form message and smooth-scrolls to the contact section
- **For-sale subpage** — a dedicated `elado.html` page listing boxes available for purchase
- **SEO-ready** — meta descriptions, semantic HTML5, unique title tags per page

---

### 🚀 Before Going Live — Required Setup

> ⚠️ **Required step:** The recipient email address is not set. You must update it before launching.

1. Open [`script.js`](script.js).
2. On **line 1**, replace the placeholder:
   ```js
   const recipientEmail = 'IDE_IRD_A_SAJAT_EMAIL_CIMED@pelda.hu';
   ```
   with your actual email address:
   ```js
   const recipientEmail = 'you@yourdomain.com';
   ```
3. Save the file and upload the full folder.

---

### ☁️ Deployment

#### Netlify (recommended — free)

1. Go to [netlify.com/drop](https://netlify.com/drop).
2. Drag and drop the entire `RentBox/` folder onto the Drop interface.
3. Your site goes live instantly at a generated URL.
4. Optionally connect a custom domain in the Netlify dashboard.

#### GitHub Pages

1. Create a public GitHub repository.
2. Push all files to the root of the `main` branch.
3. Go to **Settings → Pages** and set the source to `main` branch, `/ (root)`.
4. Your site will be available at `https://username.github.io/repository-name/` within a few minutes.

---

### 🛠️ Tech Stack

| Technology | Description |
|---|---|
| HTML5 | Semantic structure, accessibility attributes (ARIA) |
| Vanilla CSS | Custom design system, CSS custom properties, animations |
| Vanilla JavaScript | Gallery, navigation, form logic — zero dependencies |
| `<dialog>` API | Native browser modal for image lightbox |
| Intersection Observer | Scroll-triggered reveal animations |

---

### 📄 License

This project was created for personal/commercial use. Copying or redistribution requires the author's explicit permission.
