import { usePosts } from '../context/postContext'
import { Link } from 'react-router-dom'

export function HomePage()
{
    const { posts, setPosts } = usePosts()


    return (
        <div>

            <h1>HomePage</h1>

            <Link to="/new" className='text-blue-100 block'>Go to new</Link>

            <button className='bg-red-100' onClick={() => setPosts([1, 2, 3])}>
                add
            </button>
        </div>
    )
}