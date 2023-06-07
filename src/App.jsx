import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CssBaseline } from '@mui/material'
import './App.css'
import TodoList from './TodoList'
import Navbar from "./Navbar"

function App() {
  const [count, setCount] = useState(0)
//abha@Abhas-MacBook-Air todo % sudo chmod -R 777 src
  return (
    <>
    
    <CssBaseline/>
    <Navbar/>
      {/*<h1>TODO </h1>*/}
      <TodoList/>
    </>
  )
}

export default App
