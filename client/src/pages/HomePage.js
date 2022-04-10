import { usePosts } from '../context/postContext'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export function HomePage()
{
    const { getPosts, posts } = usePosts()

    useEffect(() =>
    {
        getPosts()
    }, [])

    return (
        <div className='text-white'>
            {posts.map(post => (
                <div key={post._id}>
                    {post.title}
                </div>
            ))}
        </div>
    )
}