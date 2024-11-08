import { useState } from 'react'
import './App.css'
import Usercontextprovider from './context/Usercontextprovider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Usercontextprovider>
    <h1>context api with adithya rana </h1>
    <Login />
    <Profile />
    </Usercontextprovider>
  )
}

export default App
