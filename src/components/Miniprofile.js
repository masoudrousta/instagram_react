import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice'
import { auth } from '../firebase'

function Miniprofile() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const signUserOut = () => {
    dispatch(logout())
    auth.signOut()
  }
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        className='w-16 h-16 rounded-full border p-[2px] object-cover'
        src={user?.photoURL}
        alt='profile picture'
      />
      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>{user?.displayName}</h2>
        <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
      </div>
      <button
        className='text-blue-400 text-sm font-semibold'
        onClick={signUserOut}
      >
        Sign Out
      </button>
    </div>
  )
}

export default Miniprofile
