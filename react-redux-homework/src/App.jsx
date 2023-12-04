import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Calculator } from './features/calculator/calculator'
import { ToDo } from './features/todo/todo'
import { Average } from './features/average/average'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calculator/>
      <ToDo/>
      <Average/>
    </>
  )
}

export default App
