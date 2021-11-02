import { onAuthStateChanged } from '@firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Feed from './components/Feed'
import Header from './components/Header'
import Modal from './components/Modal'
import { login, logout } from './features/userSlice'
import { auth } from './firebase'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(login(authUser))
      } else {
        dispatch(logout())
      }
    })
  }, [])
  return (
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />
      {/* Modal */}
      <Modal />
    </div>
  )
}

export default App
