import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PostCard from '../components/PostCard'
import { getposts } from '../service/PostService'

function PostList() {
    const [postList, setpostList] = useState('')

    useEffect(() => {
        getposts().then((posts) => {
            setpostList(posts.data)
        })

    }, [])


    return (
        <div>

            <div className="container">
                <div className="row mt-3">
                    <div className="col-12">
                        <Link to="/post/create">
                            <button type="button" className="btn btn-primary">
                                Create Post
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="row mt-3">
                    <PostCard Posts={postList && postList} />
                </div>
            </div>
        </div>
    )
}

export default PostList