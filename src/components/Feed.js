import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import Miniprofile from './Miniprofile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'

function Feed() {
  const user = useSelector(selectUser)
  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${
        !user && '!grid-cols-1 !max-w-3xl'
      }`}
    >
      {/* Section */}
      <section className='col-span-2'>
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>

      {/* Section */}
      {user && (
        <section className='hidden xl:inline-grid md:col-span-1'>
          <div className='fixed top-20'>
            {/* Mini profile */}
            <Miniprofile />
            {/* Suggestions */}
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  )
}

export default Feed
