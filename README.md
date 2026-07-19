# Pixel Sketch

A browser-based sketchpad built on a resizable pixel grid. Click, drag, or erase your way to a pixel-art drawing. No libraries, just vanilla HTML, CSS, and JavaScript.

## Features

- **Adjustable grid size** — set any grid from 1×1 up to 100×100 squares
- **Freehand drawing** — click individual squares or switch on drag mode to paint continuously
- **Colour picker** — choose any colour to draw with
- **Eraser** — switch to erase mode to paint squares back to black
- **Keyboard shortcuts** for every action (see below)

## Usage

Open `index.html` directly in a browser. No build step, server, or dependencies required.

> Best viewed in Chrome — some behavior (like the `window.prompt()` dialog used for setting grid size) is most consistent there. Other browsers may style the native prompt differently or behave slightly differently.

## Controls

| Action | Button | Shortcut |
|---|---|---|
| New grid | Set Grid | `g` |
| Clear grid | Clear Grid | `r` |
| Toggle eraser | Eraser | `e` |
| Change colour | Change Colour | `c` |
| Toggle drag mode | Drag Mode | `d` |

## Built with

- HTML5
- CSS3 (Flexbox)
- Vanilla JavaScript (DOM manipulation, event delegation)

## Possible future improvements

- Undo/redo history
- Save sketch as a downloadable PNG
- Touch support for mobile drawing

## Author

Hugh Virganio, 2026

<img width="1919" height="1029" alt="image" src="https://github.com/user-attachments/assets/1adbfaa0-b7a9-4fdf-923d-4a517cfcda43" />

<img width="1919" height="1027" alt="image" src="https://github.com/user-attachments/assets/449dc61b-d233-401a-9279-6263bd13bed0" />
