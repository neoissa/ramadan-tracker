# 🌙 Ramadan Tracker 1447

A beautiful, single-file Ramadan Tracker web app with accurate **Shia Jafari** prayer time calculations.

[![Live Demo](https://img.shields.io/badge/demo-live-green)](https://your-username.github.io/ramadan-tracker)

![Ramadan Tracker Screenshot](screenshot.png)

## ✨ Features

- **Dual Countdown** — See time until Imsak (Suhoor ends) AND Iftar (Maghrib) simultaneously
- **Shia Jafari Method** (Leva Research Institute, Qum)
  - Fajr at 16° below horizon
  - Imsak = Fajr − 10 minutes
  - Maghrib = Sunset + 15 minutes
- **Full Prayer Schedule** — Fajr, Dhuhr, Asr, Maghrib, Isha'a with Arabic names
- **Multi-City** — Add unlimited cities to compare prayer times worldwide
- **Fast Progress Bar** — Visual progress from Imsak → Maghrib
- **Hijri Date** — Shows the Islamic calendar date
- **GPS Auto-Detect** — One-click location detection
- **Timezone Accurate** — Each city fetches its real UTC offset automatically
- **Zero Dependencies** — Pure HTML, CSS, and JavaScript — no frameworks, no build step

## 🚀 Quick Start

Just open `index.html` in any browser — no server or installation required.

```bash
git clone https://github.com/YOUR_USERNAME/ramadan-tracker.git
cd ramadan-tracker
# Open index.html in your browser
```

## 🌐 Deploy to GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Set Source to **Deploy from a branch**
3. Select **main** branch → **/ (root)**
4. Click **Save** — your app will be live at `https://YOUR_USERNAME.github.io/ramadan-tracker`

## 🕌 Calculation Method

| Prayer | Method |
|--------|--------|
| Imsak  | Fajr − 10 minutes |
| Fajr   | Sun at 16° below horizon |
| Dhuhr  | Solar noon |
| Asr    | Shadow factor 1 (Standard) |
| Maghrib | Sunset + 15 minutes |
| Isha   | Sun at 14° below horizon |

> Calculations use the **Leva Research Institute (Qum)** parameters, standard for Shia Jafari communities.

## 🛠 Tech Stack

- Pure **HTML5 / CSS3 / Vanilla JS**
- [OpenStreetMap Nominatim](https://nominatim.org/) — free geocoding
- [TimeAPI.io](https://timeapi.io/) — free timezone lookup

## 📄 License

MIT — feel free to use, modify, and share.
