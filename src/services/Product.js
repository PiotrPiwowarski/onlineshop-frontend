import axios from 'axios';

const URL = 'http://localhost:8080/api/product';

export const getProductById = (id) => {
    return axios.get(`${URL}/${id}`);
}

export const getAllProducts = () => {
    return axios.get(`${URL}/all`)
}