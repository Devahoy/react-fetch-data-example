import { useEffect, useState } from 'react'
import Posts from './posts'

import { API_URL } from '../constants'

const WithUseEffect = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true)
      const res = await fetch(API_URL)
      const data = await res.json()
      setIsLoading(false)
      setPosts(data)
    }

    getPosts()
  }, [])

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <h2 className="post-heading">ตัวอย่าง `useEffect`</h2>
      <Posts posts={posts} />
    </>
  )
}

export default WithUseEffect
