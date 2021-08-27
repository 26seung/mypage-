import axios from "axios"
import { ACCESS_TOKEN, API_BASE_URL } from "../constants";

//  Method

const login = (username,password) => {
    axios({
        method: 'POST',
        url:  API_BASE_URL + "/api/auth/login",
        data: {username, password}
    })
    .then((res) => {
        if(res.data.accessToken){
            localStorage.setItem(ACCESS_TOKEN, JSON.stringify(res.data));
        }
        return res.data;
    })
}
const join = async (username, password, email) => {
    await axios({
        method: 'POST',
        url:  API_BASE_URL + "/api/auth/join",
        data: {username, password, email}
    })
}

const profile = async () => {
    await axios({
        method: 'GET',
        url: API_BASE_URL + "/api/auth/profile",
        headers: ACCESS_TOKEN
    })
}

export default {
    join, login,
}