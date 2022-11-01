import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar(props) {

    return (
        <>
            <nav id="sidebarMenu" className={`col-md-3 col-lg-2 d-md-block bg-light sidebar collapse  ${props.toggleclass === true ? 'show' : ''}`}>
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                aria-current="page" to="/">
                                <span data-feather="home"></span>
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="about" >About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="post-list" >Post List</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar