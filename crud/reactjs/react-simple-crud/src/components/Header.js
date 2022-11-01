import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../service/AuthService'


function Header(props) {

  const [showNav, setshowNav] = useState(false)
  const navigate = useNavigate()
  function ToggleClass() {
    setshowNav(!showNav)
  }
  useEffect(() => {
    props.getShowclassName(showNav)
  }, [props, showNav])

  const logOut = () => {

    logout().then((res) => {
      navigate('/login')
    })

  }

  return (
    <>


      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="">Company name</Link>
        <button onClick={() => ToggleClass(true)} className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" ></span>
        </button>
        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <Link className="nav-link px-3" onClick={() => { logOut() }} >Sign out</Link>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header