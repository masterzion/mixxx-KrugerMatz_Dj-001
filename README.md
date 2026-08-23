# Krüger & Matz DJ-001 Mixxx Controller Mapping

![Krüger & Matz DJ-001](https://raw.githubusercontent.com/masterzion/mixxx-KrugerMatz_Dj-001/master/dj-001.png)

Official mapping and script preset for the **Krüger & Matz DJ-001** DJ Controller with built-in USB Audio interface for Mixxx.

- [Manufacturer Product Page](https://www.krugermatz.com/en_US/p/DJ-001-controller/2280)
- [Mixxx Official Website](https://mixxx.org/)

---

## Features

- **Touch-sensitive Jog Wheels**: Vinyl scratch when touching the top platter, pitch bending / jog nudge when rotating the wheel.
- **Transport Controls**: PLAY/PAUSE and CUE buttons with hardware LED feedback.
- **Track Loading**: LOAD buttons for Deck 1 and Deck 2.
- **Pitch Bend**: PITCH (+) and PITCH (-) buttons.
- **Manual Loops**: LOOP IN and LOOP OUT with LED feedback.
- **2-Band EQ**: Dedicated LOW and HIGH equalizer knobs per channel.
- **Mixer Section**: Channel volume faders, Master volume knob, and Crossfader.
- **Effects**: FX 1 and FX 2 enable buttons with LED feedback.
- **Library Navigation**: Rotary selector for track scrolling and Focus button to toggle between playlist tree and track table.

---

## Audio Interface Setup

The Krüger & Matz DJ-001 is USB Class Compliant (works out of the box on Linux, Windows, and macOS without extra drivers).

In Mixxx **Preferences > Sound Hardware**:
- **Master**: `Channels 1-2` (Main RCA / 3.5mm Output)
- **Headphones**: `Channels 3-4` (Front 3.5mm Headphone Jack)

---

## Installation

### Method 1: Included with Mixxx (Upcoming)
Once merged into Mixxx, this controller is available out-of-the-box in the controller preferences.

### Method 2: Manual Installation

1. Copy the mapping files to your Mixxx controller folder:

   - **Linux**: `~/.mixxx/controllers/` (or `~/.var/app/org.mixxx.Mixxx/.mixxx/controllers/` if using Flatpak)
   - **Windows**: `%LOCALAPPDATA%\Mixxx\controllers\`
   - **macOS**: `~/Library/Application Support/Mixxx/controllers/`

   ```bash
   cp KrugerMatz-DJ-001.midi.xml KrugerMatz-DJ-001-scripts.js ~/.mixxx/controllers/
   ```

2. Open Mixxx -> **Preferences** -> **Controllers** -> **Krüger & Matz DJ-001**.
3. Check **Enabled**, select the preset, and click **Apply**.
