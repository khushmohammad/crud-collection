import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { deletepost, getpostdetails } from '../service/PostService'



function PostDetails() {
    const navigate = useNavigate()
    const [PostDetail, setPostDetail] = useState(null)
    const routeParams = useParams()

    useEffect(() => {
        getpostdetails(routeParams.id).then((res) => {
            setPostDetail(res.data)
        }
        ).catch((error) => {
            navigate("/post-list")
        })
    }, [])

    const deletePost = (id) => {

        if (window.confirm("Delete post ?")) {
            deletepost(id).then((res) => {
                if (res.status === 204) {
                    navigate("/post-list")
                }
            })
        }
    }

    return (
        <div>
            <div className='d-none'>{PostDetail && PostDetail.id}</div>
            <div className='d-none'>{PostDetail && PostDetail.user_id}</div>
            {PostDetail && PostDetail.id &&
                <div className="row mt-3">
                    <div className="col-8">
                        <Link to={`/post/edit-post/${PostDetail.id}`}>
                            <button type="button" className="btn btn-primary">
                                edit Post
                            </button>
                        </Link>
                    </div>
                    <div className="col-4">
                        <>
                            <button onClick={() => deletePost(PostDetail.id)} type="button" className="btn btn-primary">
                                delete Post
                            </button>
                        </>
                    </div>
                </div>}
            <div className='my-4'>
                <h2>
                    {PostDetail && PostDetail.title}
                </h2>
            </div>

            <div className='my-4'>


                <div>
                    {PostDetail && PostDetail.body}
                </div>
            </div>

            {/* {JSON.stringify(PostDetail && PostDetail)} */}
        </div>
    )
}

export default PostDetails