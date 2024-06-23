import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/configuration";
import { useSelector } from 'react-redux';

function AllPostsPage() {
    
    const [posts, setPosts] = useState([])
    const userData = useSelector(state => state.auth.userData)

    useEffect(() => {
        appwriteService.getMyPosts(userData.$id).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPostsPage