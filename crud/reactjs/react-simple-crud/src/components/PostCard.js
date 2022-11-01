import React from 'react'
import { Link } from 'react-router-dom'

function PostCard(props) {


    return (
        <>
            {props.Posts && props.Posts.map((data, i) => {
                // console.log(data);
                const { id, user_id, title, body } = data
                return (
                    <div className="col-md-6 " key={i}>


                        <div className="card my-3 ">

                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{body}</p>
                                <p className="card-text d-none">{user_id}</p>
                                <Link to={`/post/${id}`} className="btn btn-primary">More details</Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default PostCard