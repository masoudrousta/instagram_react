import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux'
import { openModal, selectModal } from '../features/modalSlice'
import { useHistory } from 'react-router'
import { signInWithPopup } from '@firebase/auth'
import { auth, provider } from '../firebase'
import { login, logout, selectUser } from '../features/userSlice'

function Header() {
  const modal = useSelector(selectModal)
  const user = useSelector(selectUser)
  const history = useHistory()
  const dispatch = useDispatch()

  const logInToApp = (e) => {
    e.preventDefault()
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(login(result.user))
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const signUserOut = () => {
    dispatch(logout())
    auth.signOut()
  }
  console.log(user)
  return (
    <div className='shadow-sm bottom-b bg-white sticky top-0 z-50'>
      <div className='flex justify-between max-6-xl mx-5 lg:mx-auto lg:mr-10'>
        {/* Left */}
        <div
          onClick={() => history.push('/')}
          className='relative hidden lg:inline-grid w-24 mt-3 ml-2 cursor-pointer'
        >
          <img
            src='https://res.cloudinary.com/dmvktbxff/image/upload/v1634334445/instagram_react/instagram_logo_s2zb77.png'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div
          onClick={() => history.push('/')}
          className='relative w-20 lg:hidden flex-shrink-0 -ml-3 cursor-pointer'
        >
          <img
            src='https://res.cloudinary.com/dmvktbxff/image/upload/v1634335235/instagram_react/instagram_logo_photo_ailwho.png'
            className='object-contain'
          />
        </div>
        {/* Middle - Search input field */}
        <div className='max-w-xs'>
          <div className='mt-1 relative p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-500' />
            </div>
            <div>
              <input
                className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'
                type='text'
                placeholder='Search'
              />
            </div>
          </div>
        </div>
        {/* Right */}
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon onClick={() => history.push('/')} className='navBtn' />
          <MenuIcon className='h-6 md:hidden cursor-pointer' />
          {user ? (
            <>
              <div className='relative navBtn'>
                <PaperAirplaneIcon className='navBtn rotate-45' />
                <div className='absolute -top-1 -right-2 text-sm w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>
                  3
                </div>
              </div>
              <PlusCircleIcon
                className='navBtn'
                onClick={() => {
                  dispatch(openModal())
                }}
              />
              <UserGroupIcon className='navBtn' />
              <HeartIcon className='navBtn' />
              <img
                onClick={signUserOut}
                src={user?.photoURL}
                alt='profile pic'
                className='h-10 w-10 rounded-full cursor-pointer object-cover'
              />
            </>
          ) : (
            <button className='text-sm whitespace-nowrap' onClick={logInToApp}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
