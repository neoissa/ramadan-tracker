# 🌙 Ramadan & Prayer Tracker — Shia Jafari

A modern, high-precision, zero-dependency Progressive Web App (PWA) supporting **multiple Ramadan years (1444 AH – 1456+ AH / 2023–2035+)**, year-round prayer times, and accurate **Shia Jafari** astronomical calculations.

[![Live Demo](https://img.shields.io/badge/demo-live-green)](https://your-username.github.io/ramadan-tracker)

---

## ✨ Features

- **🗓️ Multi-Year Ramadan Support (1444–1456+ AH)**
  - Automatically identifies whether the current date is within Ramadan or counts down to the upcoming Ramadan.
  - Interactive Year Switcher to view past and future 30-day Ramadan schedules anytime.
- **🔭 Regional Moon Sighting Offset**
  - Adjust Ramadan start dates by `−2` to `+2` days in Settings to align with local crescent observation and Marja' announcements.
- **🔊 Audio Adhan & Dua Recitations**
  - Authentic Shia Adhan recordings (Abu Dhar al-Halawaji, Sheikh Hussein Ghadiri, Sheikh Abdul Basit) with resilient offline synthesized chime fallback.
  - Audio playback for daily duas, Suhoor intention (*Niyyah*), and Iftar prayers.
- **📚 Major Shia Duas Library**
  - Dedicated reader for **Dua al-Iftitah**, **Dua Abu Hamza al-Thumali**, **Dua al-Mujeer**, and **Dua Jawshan al-Kabeer** with font scaler and transliteration toggles.
- **⚖️ Qadha (Missed Fast) & Fidyah Tracker**
  - Persistent counter for missed fasts with one-click "Fasted a Qadha Day Today" checkoff and dynamic Fidyah/Kaffarah calculations.
- **🖼️ Social Story & WhatsApp Card Studio**
  - HTML5 Canvas exporter generating **9:16 Instagram Stories** and **1:1 Square Cards** of today's timetable for social sharing.
- **⏰ Pre-Suhoor Wake-Up Alarm**
  - Configurable alarm (30, 45, 60, or 90 minutes before Imsak) with chime audio, test button, and home screen indicator.
- **⏱️ Dual Smart Countdown**
  - Real-time countdown to **Imsak** (Suhoor ends) when not fasting and **Iftar** (Maghrib) during fasting.
  - Progress bar showing elapsed daily fasting percentage with zero digit jitter.
- **🕌 Complete Shia Jafari Prayer Schedule**
  - Imsak, Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha'a, and **Shar'i Midnight (*Nisf al-Layl*)**.
  - **Tahajjud window** status badge (*NOW OPEN* vs *UPCOMING*).
- **🖨️ Printable Fridge Timetable**
  - Clean `@media print` layout formatting the full 30-day schedule onto standard A4 and US Letter paper with one click.
- **📅 Apple / Google Calendar (.ics) Export**
  - Download a standard `.ics` calendar file with daily Imsak and Maghrib alarms for iOS, Android, and desktop calendars.
- **📖 Daily Duas & Ayahs with Transliteration**
  - Arabic text, phonetic English transliteration, and English translation for all daily supplications.
- **🧭 Qibla Compass & 📿 Smart Tasbih**
  - Interactive compass using device orientation sensors and Kaaba great-circle bearing.
  - Digital Tasbih counter with haptic vibration feedback.
- **💧 Hydration Tracker & 🪙 Zakat al-Fitr Calculator**
  - 8-glass water tracker active during non-fasting night hours.
  - Interactive Zakat al-Fitr calculator with commodity presets (wheat, rice, dates, cash).
- **🌍 Multi-City Comparison**
  - Add unlimited worldwide cities with live local clocks and one-click city swapping.
- **🚀 100% Client-Side & Offline Ready**
  - Zero build steps, zero external frameworks, and offline PWA caching via Service Worker.

---

## 🚀 Quick Start

Open `index.html` in any modern web browser — no installation or local server required.

```bash
git clone https://github.com/YOUR_USERNAME/ramadan-tracker.git
cd ramadan-tracker
# Double-click index.html or serve locally
```

---

## 🕌 Calculation Method

| Prayer | Method / Parameter |
| :--- | :--- |
| **Imsak** | Fajr − 10 minutes |
| **Fajr** | Sun at 16° below horizon |
| **Sunrise** | Sun upper limb reaches astronomical horizon |
| **Dhuhr** | Solar transit / noon |
| **Asr** | Shadow factor 1 (Standard) |
| **Maghrib (Iftar)** | Sunset + 15 minutes (*Dhahab al-humrah al-mashriqiyyah*) |
| **Isha'a** | Sun at 14° below horizon |
| **Shar'i Midnight** | Midpoint between Sunset and the following day's Fajr |

> Calculations default to the **Leva Research Institute (Qum)** parameters standard for Shia Jafari communities worldwide, with alternative options for ISNA, MWL, Egypt, Karachi, and Makkah in Settings.

---

## 🛠 Tech Stack

- Pure **HTML5 / CSS3 / Vanilla JavaScript**
- [OpenStreetMap Nominatim](https://nominatim.org/) — Geocoding & GPS reverse lookup
- [TimeAPI.io](https://timeapi.io/) — Timezone coordinate lookup
- Native **Web Audio API**, **Canvas API**, & **DeviceOrientation API**

---

## 📄 License

MIT — Feel free to use, modify, and share.
