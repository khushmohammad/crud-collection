import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import About from '../pages/About';
import CreatePost from '../pages/CreatePost';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import PostDetails from '../pages/PostDetails';
import PostList from '../pages/PostList';
import Layout from './Layout';

function Routing() {

    const navigate = useNavigate()
    // const [userInfo, setuserInfo] = useState()

    useEffect(() => {
        if (!localStorage.getItem("user")) {

            navigate("/login")
        } else {
            let user = JSON.parse(localStorage.getItem("user"))
            //  setuserInfo(user)
        }
    }, [])


    return (
        <div>

            <Routes>
                <Route path='/login' element={<Login />} />
                <Route exact path="" element={<Layout />}>
                    <Route index exact element={<Home />} />

                    <Route path='/about' element={<About />} />
                    <Route path='/post-list' element={<PostList />} />
                    <Route path='/post/:id' element={<PostDetails />} />
                    <Route path='/post/create' element={<CreatePost />} />
                    <Route path='/post/edit-post/:id' element={<CreatePost />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>

        </div>
    )
}

export default Routing