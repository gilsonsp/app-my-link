import axios from 'axios';


//API KEY: bd5a43b24c8a1b599acaada74b8af06d9c26de38

//baseURL: https://api-ssl.bitly.com/v4/

export const key = 'bd5a43b24c8a1b599acaada74b8af06d9c26de38';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Content-type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
})

export default api;