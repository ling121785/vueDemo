import axios from 'axios'

let BASE_URL = ""

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'content-type': 'application/json;charset=UTF-8',
        'accept': 'application/json; version=1'
    }
});

export default instance