import { useMapStore } from '../store/mapStore'
import './DungeonGrid.css'

interface DungeonGridProps {
  width: number
  height: number
}

const CELL_SIZE = 32

export default function DungeonGrid({ width, height }: DungeonGridProps) {
  const cells = useMapStore((state) => state.cells)
  const selectedTool = useMapStore((state) => state.selectedTool)
  const setCell = useMapStore((state) => state.setCell)

  const handleCellClick = (x: number, y: number) => {
    setCell(x, y, selectedTool)
  }

  const getCellColor = (type: string): string => {
    switch (type) {
      case 'wall': return '#666'
      case 'door': return '#8B4513'
      case 'treasure': return '#FFD700'
      case 'npc': return '#FF69B4'
      case 'spawn': return '#00FF00'
      default: return '#222'
    }
  }

  return (
    <div className="dungeon-grid-container">
      <svg
        width={width * CELL_SIZE}
        height={height * CELL_SIZE}
        className="dungeon-grid"
      >
        {/* Grid lines */}
        {Array.from({ length: width + 1 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * CELL_SIZE}
            y1={0}
            x2={i * CELL_SIZE}
            y2={height * CELL_SIZE}
            className="grid-line"
          />
        ))}
        {Array.from({ length: height + 1 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1={0}
            y1={i * CELL_SIZE}
            x2={width * CELL_SIZE}
            y2={i * CELL_SIZE}
            className="grid-line"
          />
        ))}

        {/* Cells */}
        {Array.from({ length: height }).map((_, y) =>
          Array.from({ length: width }).map((_, x) => {
            const cell = cells.get(`${x},${y}`)
            return (
              <g key={`cell-${x}-${y}`}>
                <rect
                  x={x * CELL_SIZE}
                  y={y * CELL_SIZE}
                  width={CELL_SIZE}
                  height={CELL_SIZE}
                  fill={cell ? getCellColor(cell.type) : 'transparent'}
                  className="cell"
                  onClick={() => handleCellClick(x, y)}
                />
                {cell && (
                  <text
                    x={x * CELL_SIZE + CELL_SIZE / 2}
                    y={y * CELL_SIZE + CELL_SIZE / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="cell-label"
                  >
                    {cell.type[0].toUpperCase()}
                  </text>
                )}
              </g>
            )
          })
        )}
      </svg>
    </div>
  )
}
