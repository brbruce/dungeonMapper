import { useMapStore, type CellType } from '../store/mapStore'
import './Toolbar.css'

const TOOLS: { type: CellType; label: string }[] = [
  { type: 'empty', label: 'Eraser' },
  { type: 'wall', label: 'Wall' },
  { type: 'door', label: 'Door' },
  { type: 'treasure', label: 'Treasure' },
  { type: 'npc', label: 'NPC' },
  { type: 'spawn', label: 'Spawn' },
]

export default function Toolbar() {
  const selectedTool = useMapStore((state) => state.selectedTool)
  const setSelectedTool = useMapStore((state) => state.setSelectedTool)
  const clearMap = useMapStore((state) => state.clearMap)

  const getButtonColor = (type: CellType): string => {
    switch (type) {
      case 'wall': return '#666'
      case 'door': return '#8B4513'
      case 'treasure': return '#FFD700'
      case 'npc': return '#FF69B4'
      case 'spawn': return '#00FF00'
      case 'empty': return '#333'
      default: return '#444'
    }
  }

  return (
    <div className="toolbar">
      <div className="tools-section">
        <h3>Tools</h3>
        <div className="tool-buttons">
          {TOOLS.map((tool) => (
            <button
              key={tool.type}
              onClick={() => setSelectedTool(tool.type)}
              className={`tool-button ${selectedTool === tool.type ? 'active' : ''}`}
              style={{
                borderColor: selectedTool === tool.type ? getButtonColor(tool.type) : 'transparent',
                borderWidth: '2px',
              }}
              title={tool.label}
            >
              <span
                className="color-indicator"
                style={{ backgroundColor: getButtonColor(tool.type) }}
              ></span>
              {tool.label}
            </button>
          ))}
        </div>
      </div>

      <div className="actions-section">
        <button onClick={clearMap} className="clear-button">
          Clear Map
        </button>
      </div>
    </div>
  )
}
