.. _krugermatz_dj001:

Krüger & Matz DJ-001
====================

The Krüger & Matz DJ-001 is a compact 2-deck DJ controller featuring a built-in USB audio interface, touch-sensitive jog wheels, 2-band equalizers, transport controls, and library navigation.

- `Manufacturer's Product Page <https://www.krugermatz.com/en_US/p/DJ-001-controller/2280>`__
- `Forum Thread <https://mixxx.discourse.group/>`__

.. sectionauthor:: Jairo Master Zion

Audio Interface Setup
---------------------

The DJ-001 has a built-in 4-channel audio interface:

- **Master Output**: Channels 1-2 (RCA output / 3.5mm jack)
- **Headphone Output**: Channels 3-4 (3.5mm front headphone jack)

In Mixxx :menuselection:`Preferences --> Sound Hardware`:

1. Set :guilabel:`Master` to :guilabel:`Channels 1-2`.
2. Set :guilabel:`Headphones` to :guilabel:`Channels 3-4`.

Compatibility
-------------

The controller is USB MIDI and Audio Class Compliant. It works on Linux, Windows, and macOS without additional manufacturer drivers.

Controller Mapping
------------------

.. figure:: ../../../_static/controllers/krugermatz_dj001.svg
   :align: center
   :width: 100%
   :figwidth: 100%
   :alt: Krüger & Matz DJ-001 (schematic)

   Krüger & Matz DJ-001

Decks (Channels 1 and 2)
~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Control
     - Function
   * - **Jog Wheel (Top Touch)**
     - Touches the platter to enable vinyl scratch mode.
   * - **Jog Wheel (Turn)**
     - Scratches when touched; performs pitch bending / jog nudging when turned without touching the top platter.
   * - **PLAY / PAUSE**
     - Starts or pauses track playback (LED lights up when playing).
   * - **CUE**
     - Sets or jumps to the main cue point (LED lights up when cue is active).
   * - **LOAD (1 / 2)**
     - Loads the selected library track into Deck 1 or Deck 2.
   * - **PITCH (+ / -)**
     - Temporarily / permanently adjusts track playback rate (pitch bend).
   * - **LOOP IN**
     - Sets the loop in point.
   * - **LOOP OUT**
     - Sets the loop out point and activates the loop (LED illuminates when loop is active).
   * - **FX**
     - Toggles Effect Unit 1 for Deck 1 or Effect Unit 2 for Deck 2 (LED illuminates when active).
   * - **VOL Fader**
     - Controls deck channel volume.

Mixer & Browser
~~~~~~~~~~~~~~~

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Control
     - Function
   * - **LOW**
     - Adjusts low frequencies (bass) of the deck equalizer.
   * - **HIGH**
     - Adjusts high frequencies (treble) of the deck equalizer.
   * - **MASTER**
     - Adjusts master output level.
   * - **CROSSFADER**
     - Crossfades audio between Deck 1 and Deck 2.
   * - **BROWSE (Rotary)**
     - Scrolls up and down through track lists or sidebar items.
   * - **FOCUS / ENTER**
     - Toggles focus between the library sidebar tree and the track table.
