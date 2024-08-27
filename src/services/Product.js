import axios from 'axios';

export const getProductById = (id) => {
    return axios.get(`http://localhost:8080/api/product/${id}`);
}