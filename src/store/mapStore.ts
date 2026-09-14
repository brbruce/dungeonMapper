import { create } from 'zustand'

export type CellType = 'empty' | 'wall' | 'door' | 'treasure' | 'npc' | 'spawn'

export interface Cell {
  type: CellType
  x: number
  y: number
}

interface MapStore {
  cells: Map<string, Cell>
  selectedTool: CellType
  setCell: (x: number, y: number, type: CellType) => void
  getCell: (x: number, y: number) => Cell | undefined
  setSelectedTool: (tool: CellType) => void
  clearMap: () => void
}

export const useMapStore = create<MapStore>((set, get) => ({
  cells: new Map(),
  selectedTool: 'wall',

  setCell: (x: number, y: number, type: CellType) => {
    set((state) => {
      const newCells = new Map(state.cells)
      const key = `${x},${y}`

      if (type === 'empty') {
        newCells.delete(key)
      } else {
        newCells.set(key, { type, x, y })
      }

      return { cells: newCells }
    })
  },

  getCell: (x: number, y: number) => {
    const key = `${x},${y}`
    return get().cells.get(key)
  },

  setSelectedTool: (tool: CellType) => {
    set({ selectedTool: tool })
  },

  clearMap: () => {
    set({ cells: new Map() })
  },
}))
