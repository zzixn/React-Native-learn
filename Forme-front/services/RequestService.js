import axios from "axios";

class RequestService {
    requestHttpGet = () => {
        return axios({
            method: 'get',
            url: '<http://localhost:8080/api/hello>',
            data: data
        });
    }

    requestHttpDelete = (data) => {
        return axios({
            method: 'delete',
            url: '<http://localhost:8080/api/hello>',
            data: data
        });
    }
}

export default new RequestService();