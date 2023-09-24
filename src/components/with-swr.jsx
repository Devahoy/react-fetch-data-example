import useSWR from 'swr'
import Posts from './posts'

import { API_URL } from '../constants'

const fetcher = (url) => fetch(url).then((r) => r.json())

const WithSWR = () => {
  const { data: posts, isLoading } = useSWR(API_URL, fetcher)

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <h2 className="post-heading">ตัวอย่าง `SWR`</h2>
      <Posts posts={posts} />
    </>
  )
}

export default WithSWR
