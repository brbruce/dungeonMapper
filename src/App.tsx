import { useState } from 'react'
import DungeonGrid from './components/DungeonGrid'
import Toolbar from './components/Toolbar'
import './App.css'

function App() {
  const [gridWidth, setGridWidth] = useState(20)
  const [gridHeight, setGridHeight] = useState(20)

  return (
    <div className="app">
      <header className="header">
        <h1>Dungeon Mapper</h1>
      </header>
      <div className="container">
        <Toolbar />
        <DungeonGrid width={gridWidth} height={gridHeight} />
      </div>
    </div>
  )
}

export default App
