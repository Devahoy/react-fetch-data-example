import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

import Posts from './posts'
import { API_URL } from '../constants'

const queryClient = new QueryClient()

function FetchPosts() {
  const { isLoading, data: posts } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetch(API_URL).then((res) => res.json()),
  })

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <h2 className="post-heading">ตัวอย่าง `React Query`</h2>
      <Posts posts={posts} />
    </>
  )
}

export default function WithReactQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <FetchPosts />
    </QueryClientProvider>
  )
}
