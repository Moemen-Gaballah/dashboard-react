import axios from "axios";
import {API_URL} from "../../config/config.jsx";

class CarBrands {
    async listing(){
        const url = `${API_URL}/admin/car-brands`;
        return axios.get(url)
            .then((response) => {
                // if (response.status === 200) {
                //     localStorage.setItem("accessToken", response.data.data.authorization.token);
                //     localStorage.setItem("user", JSON.stringify(response.data.data.user));
                //     window.location.href = "/";
                // }
                return response.data.data;
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
}

export default new CarBrands();