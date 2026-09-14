# Dungeon Mapper

A cross-platform web app for easily drawing grid-based dungeon maps.

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Zustand** - State management
- **SVG** - Grid rendering

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will start the dev server at `http://localhost:5173` and open it in your default browser.

### Build

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

## Features

- **Grid-based editor** - Draw dungeons on a customizable grid
- **Multiple tools**:
  - Wall: Add walls to your dungeon
  - Door: Place doors between rooms
  - Treasure: Mark treasure locations
  - NPC: Place non-player characters
  - Spawn: Mark player spawn points
  - Eraser: Clear cells
- **Real-time editing** - See changes as you draw
- **Clear map** - Start over with a single click

## Project Structure

```
src/
├── components/
│   ├── DungeonGrid.tsx      # Main grid component
│   ├── DungeonGrid.css
│   ├── Toolbar.tsx          # Tool selection toolbar
│   └── Toolbar.css
├── store/
│   └── mapStore.ts          # Zustand state management
├── App.tsx                  # Main app component
├── App.css
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

## Future Enhancements

- Export maps as JSON or images
- Undo/redo functionality
- Zoom and pan controls
- Grid size customization
- Save/load functionality
- Brush and fill tools
