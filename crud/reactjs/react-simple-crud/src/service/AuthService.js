
import { getuserlist } from './PostService';



export const logout = () => {
    console.log("logout");
    let LogoutPromise = new Promise(function (myResolve) {

        myResolve(localStorage.removeItem("user"))

    });
    return LogoutPromise
}

export const login = (data) => {

    return getuserlist().then((res) => {

        return res.data.find((user) => {
            if (user.email === data) {
                return user
            } else {
                return false
            }
        })

    }).then((res) => {
        console.log(res);
        if (res) {
            localStorage.setItem("user", JSON.stringify(res))
            return true

        } else {
            return false
        }

    })






}