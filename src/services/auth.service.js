import axios from "axios";

import {API_URL} from "../config/config.jsx";

class AuthService {

    isAuth = (localStorage.getItem('accessToken') && localStorage.getItem('accessToken') != null);

    login(email, password) {
        const url = `${API_URL}/login`;
        return axios.post(url, {email, password})
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem("accessToken", response.data.data.authorization.token);
                    localStorage.setItem("user", JSON.stringify(response.data.data.user));
                    window.location.href = "/";
                }
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log("server responded");

                } else if (error.request) {
                    console.log("network error");
                } else {
                    console.log(error);
                }
            });
    }


    logout() {
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();