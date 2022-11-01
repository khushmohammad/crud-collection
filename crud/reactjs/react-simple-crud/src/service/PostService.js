import axios from 'axios'


const ApiPath = process.env.REACT_APP_API_URL
const ApiToken = process.env.REACT_APP_B_TOKEN

export const getposts = () => {
    return axios.get(`${ApiPath}/public/v2/posts`, { headers: { 'Authorization': 'Bearer ' + ApiToken } })
    // https://gorest.co.in/public/v2/posts
}

export const getpostdetails = (id) => {
    return axios.get(`${ApiPath}/public/v2/posts/${id}`, { headers: { 'Authorization': 'Bearer ' + ApiToken } })
    // https://gorest.co.in/public/v2/posts
}


export const getuserlist = (id) => {
    return axios.get(`${ApiPath}/public/v2/users`, { headers: { 'Authorization': 'Bearer ' + ApiToken } })
    // https://gorest.co.in/public/v2/posts
}

export const createpost = (data) => {

    console.log(data);
    return axios.post(`${ApiPath}/public/v2/users/${data.user_id}/posts`, data, { headers: { 'Authorization': 'Bearer ' + ApiToken } })
    // https://gorest.co.in/public/v2/posts
}

export const editpost = (data) => {

    console.log(data);
    return axios.put(`${ApiPath}/public/v2/posts/${data.id}`, data, { headers: { 'Authorization': 'Bearer ' + ApiToken } })
    // https://gorest.co.in/public/v2/posts
}

export const deletepost = (id) => {


    return axios.delete(`${ApiPath}/public/v2/posts/${id}`, { headers: { 'Authorization': 'Bearer ' + ApiToken } })
    // https://gorest.co.in/public/v2/posts
}