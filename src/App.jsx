import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRouter from './router/AppRouter'
import AuthProvider from './helpers/auth/AuthProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
