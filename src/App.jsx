import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './features/authSlice'
import { Header, Footer } from './components/index'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))

  }, [])

  return !loading ? (
    <div className='min-h-screen w-screen bg-gray-600 flex flex-wrap justify-center'>
      <Header/>
      <h1>Blog App</h1>
      <Footer/>
    </div>
  ) : null
}

export default App
