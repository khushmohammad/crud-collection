import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createpost, editpost, getpostdetails, getuserlist } from '../service/PostService'

function CreatePost() {

    const [postFormData, setpostFormData] = useState({ user_id: '', title: '', body: '' })
    const [touched, settouched] = useState({ user_id: false, title: false, body: false })
    const [SendStatus, setSendStatus] = useState(false)
    const [userList, setuserList] = useState(null)
    const [submittype, setsubmittype] = useState("add")


    const handleChange = (e) => {

        if (e.target.name === "title") {
            settouched({ ...touched, title: true })
            setpostFormData({ ...postFormData, title: e.target.value })
        } else if (e.target.name === "content") {
            settouched({ ...touched, body: true })

            setpostFormData({ ...postFormData, body: e.target.value })
        }
        else if (e.target.name === "user_id") {
            settouched({ ...touched, user_id: true })
            setpostFormData({ ...postFormData, user_id: e.target.value })
        }


    }

    const Route = useParams()

    useEffect(() => {


        if (Route.id && Route.id !== undefined) {
            setsubmittype("edit")
            //console.log(Route.id);
            getpostdetails(Route.id).then((res) => {
                console.log(res.data);
                setpostFormData(res.data)
            })
        }
    }, [Route.id])

    useEffect(() => {
        getuserlist().then((user) => {
            setuserList(user.data)
        })

    }, [])


    const AddPost = (e) => {
        e.preventDefault()
        settouched({ user_id: true, title: true, body: true })
        if (postFormData.user_id !== '' && postFormData.title !== '' && postFormData.body !== '') {


            e.preventDefault();
            if (submittype === "add") {
                createpost(postFormData).then((res) => {
                    //   console.log(res.status);
                    if (res.status === 201) {
                        setSendStatus({ message: "post created successfully", class: "success" })
                    }
                    else {

                        setSendStatus({ message: "somthing went wrong", class: "danger" })

                    }
                });
            } else {
                editpost(postFormData)
            }


        }

    }



    return (
        <div className='my-5'>
            <form onSubmit={AddPost}>

                {SendStatus &&

                    <>
                        <h3 className={`text-${SendStatus.class}`}>{SendStatus.message}</h3>
                    </>}

                <div className='row'>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="" className="form-label">User</label>

                     
                        {userList &&

                            <>
                               {/* {JSON.stringify(userList[0].id)} */}
                                <select className="form-select form-select" name="user_id" id="" defaultValue={userList[0].id}  onChange={(e) => handleChange(e)} >
                                    <option value="">Select one</option>
                                    {userList.map((data, i) => {

                                        return (
                                            <React.Fragment key={i}>
                                                <option value={data.id}>{data.name}</option>
                                            </React.Fragment>
                                        )
                                    })}

                                </select>
                                {touched.user_id && postFormData.user_id === '' ? <span className='text-danger '>
                                    <p className='mt-2'>User is required</p>
                                </span> : ''
                                }
                            </>
                        }
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="" className="form-label">Title</label>
                        <input type="text"
                            className="form-control" name="title" id="" value={postFormData && postFormData.title} aria-describedby="helpId" placeholder="" onChange={(e) => handleChange(e)} />
                        {touched.title && postFormData.title === '' ? <span className='text-danger '>
                            <p className='mt-2'>Title is required</p>
                        </span> : ''
                        }
                    </div>

                    <div className="mb-3 col-md-12">
                        <label htmlFor="" className="form-label">Content</label>
                        <textarea onChange={(e) => handleChange(e)}
                            className="form-control" name="content" id="" aria-describedby="helpId" placeholder="" defaultValue={postFormData && postFormData.body}>

                        </textarea>
                        {touched.body && postFormData.body === '' ? <span className='text-danger '>
                            <p className='mt-2'>Content is required</p>
                        </span> : ''
                        }
                    </div>
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">
                        {submittype === "add" ? "Add New Post" : "Edit Post"
                        }
                    </button>
                </div>


            </form>
        </div>
    )
}

export default CreatePost