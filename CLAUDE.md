# Dungeon Mapper

Cross-platform web app for drawing grid-based dungeon maps with an intuitive, click-based interface.

## Tech Stack

- **React 18** + **TypeScript** for type-safe UI
- **Vite** for fast dev server and builds
- **Zustand** for lightweight state management
- **SVG** for grid rendering (chosen over Canvas for precision and per-cell manipulation)

## Architecture Overview

### Why SVG?
SVG allows individual cells to be selected, styled, and manipulated easily. Canvas would be faster at very large grids (1000+ cells), but SVG is the right choice for typical dungeon sizes (20-200 cells) where interactivity matters more than raw performance.

### Key Files
- `src/store/mapStore.ts` — Zustand store managing all map state (cells, selected tool, grid size)
- `src/components/DungeonGrid.tsx` — SVG-based grid renderer and click handler
- `src/components/Toolbar.tsx` — Tool palette (Wall, Door, Treasure, NPC, Spawn, Eraser)
- `src/App.tsx` — Root component wiring grid + toolbar

### State Shape
```
Map cells stored as Map<string, Cell>
Key: "x,y" (grid coordinates)
Value: { x, y, type: "wall" | "door" | "treasure" | "npc" | "spawn" | empty }
```

## Getting Started

```bash
npm install          # One time
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Production build → dist/
```

## Code Conventions

- Keep components focused — DungeonGrid handles rendering, Toolbar handles selection
- Store logic stays in mapStore.ts — no business logic in components
- CSS is component-scoped (DungeonGrid.css, Toolbar.css, App.css)
- Type definitions inline in TSX files (no separate types/ dir yet)

## Known Constraints & Gotchas

- **SVG performance**: Beyond ~500 cells, rendering starts to lag. If dungeon sizes grow significantly, consider Canvas or a quadtree renderer.
- **Grid fixed at 20×20**: Currently hardcoded. UI for custom grid size is a future feature.
- **No undo/redo yet**: Every click is immediate and permanent in the session. Add this before release.
- **No persistence**: Maps exist only in browser memory. LocalStorage or backend export is planned.

## Common Tasks

### Add a new tool
1. Add tool type to `mapStore.ts` (e.g., `| "trap"`)
2. Add button + handler in `Toolbar.tsx`
3. Add styling in `Toolbar.css`
4. Add rendering color/label in `DungeonGrid.tsx`

### Change grid size
Edit `GRID_WIDTH` and `GRID_HEIGHT` in `DungeonGrid.tsx` and `mapStore.ts`

### Customize colors
Edit the `cellColor()` function in `DungeonGrid.tsx` and the CSS variables in `App.css`

## Future Features (Priority Order)
- [ ] Undo/redo with Ctrl+Z / Ctrl+Shift+Z
- [ ] Export map as JSON
- [ ] Export map as PNG
- [ ] Zoom and pan controls
- [ ] Save/load to browser localStorage
- [ ] Custom grid size UI
- [ ] Copy/paste regions
- [ ] Multiple dungeon levels

## Testing
Run the dev server and manually test the happy path:
1. Click cells with different tools
2. Verify colors and labels appear
3. Click "Clear Map" and verify grid resets
4. Open browser DevTools → Network tab to check for errors

No automated tests yet — this is a prototype.

## Debugging
- Check browser console (F12) for React errors
- Zustand state is accessible in DevTools via React dev tools extension
- SVG renders as HTML — inspect with browser DevTools to debug visual issues