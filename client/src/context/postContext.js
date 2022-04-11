import { useState, createContext, useContext, useEffect } from 'react'
import { getPostsRequests, createPostRequest } from '../api/posts'

const postContext = createContext()

export const usePosts = () =>
{
    const context = useContext(postContext)
    return context
}

export const PostProvider = ({ children }) =>
{
    const [posts, setPosts] = useState([])

    const getPosts = async () =>
    {
        const res = await getPostsRequests()
        setPosts(res.data)
    }

    const createPost = async (post) =>
    {
        // console.log({ postcontext: post })
        const res = await createPostRequest(post)
        console.log(res.data)

        setPosts([...posts, res.data])
    }

    useEffect(() =>
    {
        getPosts()
    }, [])

    console.log(posts)

    return <postContext.Provider value={{
        posts,
        getPosts,
        createPost
    }}>
        {children}
    </postContext.Provider>
}