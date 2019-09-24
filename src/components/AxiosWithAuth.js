import axios from 'axios'; 

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://github-user-breakdown.herokuapp.com/',
        headers:{
            "Content-Type": "application/json",
            "Authorization": `${token}`
        }
    })
}