import { useState } from 'react'
import './App.css'
import AuthPage from "../LoginPage/AuthPage.jsx"
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service'
function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className='App'>
      {
        user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>

            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  )
}

export default App
