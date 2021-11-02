import { useState, useEffect } from 'react'
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import { db } from '../firebase'
import Post from './Post'

function Posts() {
  const [posts, setPosts] = useState([])
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (querySnapshot) => {
          setPosts(querySnapshot.docs)
        }
      ),
    [db]
  )
  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().caption}
          />
        )
      })}
    </div>
  )
}

export default Posts
