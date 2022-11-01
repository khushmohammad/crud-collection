import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from './Navbar'


function Layout() {
    const [showClass, setshowClass] = useState(false)

    function showNav(sclass) {
        setshowClass(sclass)
    }

    return (
        <>
            <Header getShowclassName={showNav} />
            <div className="container-fluid">
                <div className="row">
                    <Navbar toggleclass={showClass} />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Outlet />
                    </main>
                </div>
            </div>


        </>
    )
}

export default Layout