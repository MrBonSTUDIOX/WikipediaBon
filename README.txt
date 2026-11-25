# 🌐 WikipediaBon

**The Encyclopedia of the MrBon Universe**

Official website: [https://wikipediabon.com/]

**WikipediaBon** is an evolving encyclopedia dedicated to the characters, stories, and universe of **MrBon**, created by **Asadullah Elchoev** under **MrBon Studio X**.

This project is constantly growing. New characters, information, stories, and ideas are added regularly.

---

## ✨ Our Vision

WikipediaBon is more than an encyclopedia. It is a growing world where every character has its own identity, personality, information, and story.

Our goal is to build a universe that can expand into future creative projects and games.

---

## ⚙️ How It Works

WikipediaBon is built as a lightweight single-page web application (`index.html`) with built-in character data, interactive filtering, dynamic media/visual effects, multilingual translation, and offline support[span_0](start_span)[span_0](end_span).

### 1. Character Catalog & Rarity System
- All built-in characters are stored in the `BUILTIN` array and sorted by rarity (`Original`, `Rare`, `Super Rare`, `Epic`, `Mythic`, `Legendary`, `BonMax`, `Secret`, `BonULTRA`, `Developer`)[span_1](start_span)[span_1](end_span).
- The gallery renders cards in batches (`PAGE` — 8 cards on small screens, 6 on larger screens) with a **Scroll more** button as you browse down the page[span_2](start_span)[span_2](end_span).
- **Search & Filters:** Users can search characters by name or rarity in real time and filter by rarity chips[span_3](start_span)[span_3](end_span).

### 2. Performance & Visual Effects
- **Lazy & Thumbnail Loading:** Character images (`Character/*.png`) are loaded when cards approach the viewport (`IntersectionObserver`) and resized into lightweight WebP thumbnails (`createImageBitmap` + `<canvas>`) for smooth scrolling[span_4](start_span)[span_4](end_span).
- **Rarity & Special Effects:** Cards adapt their borders, badges, and animations to each rarity tier. Special characters also include custom Canvas/CSS effects (such as `galaxy`, `void`, `glitch`, and `BonULTRA` animations), which pause when off-screen or when reduced motion is preferred[span_5](start_span)[span_5](end_span).

### 3. Character Detail View & Special Interactions
- Clicking a card opens a modal (`#ovDet`) with the character's image, rarity badge, formatted description (headings, tables, lists, and links), and optional audio tracks with a custom waveform player[span_6](start_span)[span_6](end_span).
- **Easter eggs & special mechanics:**
  - Opening **Chef Bon** triggers a pop-up greeting (`Bon appétit!`) with a 5-minute cooldown[span_7](start_span)[span_7](end_span).
  - Opening **MrBon Virus** includes audio clips with waveform bars and arms a timed jumpscare event after 60 seconds while the modal stays open[span_8](start_span)[span_8](end_span).

### 4. Multilingual Interface
- The language selector (`#ovLang`) supports nearly 50 languages with flag icons and RTL layout support where needed (`ar`, `iw`, `fa`, `ur`)[span_9](start_span)[span_9](end_span).
- When a non-English language is selected, text nodes and search placeholders are translated via Google Translate (`translate.googleapis.com`) and cached in memory (`TC`) per language, while elements marked with `.notranslate` (such as character names, rarity labels, and brand names) stay untouched[span_10](start_span)[span_10](end_span).

### 5. Offline Mode & Android App (APK)
- The site monitors connectivity (`online` / `offline` events and periodic `ping()` checks) and shows an offline status bar/modal when connection is lost so already-loaded content remains readable[span_11](start_span)[span_11](end_span).
- It registers a Service Worker (`sw.js`) when served over `http`/`https` and offers `WikipediaBon.apk` for offline reading on Android (hiding the APK download prompts inside WebView or standalone mode)[span_12](start_span)[span_12](end_span).

### 6. Adding New Characters (For Maintainers)
1. Place the character's image in the `Character/` folder and add its path to the `IMG` map in `index.html`[span_13](start_span)[span_13](end_span).
2. Add a new object (`id`, `builtin: true`, `name`, `rarity`, `photoURL`, `description`, and optional `fx` / `media`) to the `BUILTIN` array[span_14](start_span)[span_14](end_span).

---

## 📅 Daily Updates

Every day, something new can happen in WikipediaBon:

- 🧸 New characters are introduced.
- 📖 Character descriptions and information are created.
- 📜 New stories and backgrounds are developed.
- 🔄 Existing information and content can change.
- 💡 New ideas are developed for future projects.

The encyclopedia is constantly evolving.

---

## 🎮 Future Projects

WikipediaBon is part of a larger creative universe.

Future plans include:

- Developing original games.
- Creating new characters and stories.
- Expanding the MrBon universe.
- Building new creative projects inspired by the encyclopedia.

The characters and stories can become the foundation for future games and experiences.

---

## 🌍 Website Features

- Character encyclopedia.
- Character search.
- Multilingual interface.
- Character descriptions.
- Credits and project information.
- Android application for offline reading.

---

## 🏢 Creator

- **Created by:** Asadullah Elchoev
- **Studio:** MrBon StudioX
- **Project:** Survive from MrBon

---

## 🔗 Official Links

- **Website:** [https://wikipediabon.com/](https://wikipediabon.com/)

---

WikipediaBon — Every day, a new character. Every day, a growing universe.

© MrBon StudioX. All rights reserved.
