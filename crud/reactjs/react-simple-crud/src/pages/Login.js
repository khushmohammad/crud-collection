import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../service/AuthService';

function Login() {
    const navigate = useNavigate()
    const [Email, setEmail] = useState('')


    useEffect(() => {
        if (!localStorage.getItem("user")) {

            navigate("/login")
        } else {
            navigate("/")
        }
    }, [])

    function checkEmail(email) {
        return !!email.match(/.+@.+/);
    }
    const userlogin = (e) => {
        e.preventDefault();

        if (Email !== '') {
            if (!checkEmail(Email)) {
                alert("please insert valid email")

            }

            else {
                login(Email).then((res) => {
                    console.log(res);
                    if (res) {

                        navigate("/")

                    } else {
                        navigate("/login")
                        alert("please insert valid email")

                    }
                })
            }
        }
        else {
            alert("please insert email")
        }
    }
    return (
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-md-8 m-auto pt-5 mt-5'>
                    <div>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>


                            <button type="submit" onClick={(e) => userlogin(e)} className="btn btn-primary mt-4">Submit</button>
                        </form>
                    </div></div>

            </div>
        </div>
    )
}

export default Login