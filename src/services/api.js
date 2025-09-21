import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fakestoreapi.com', // or your backend API URL
});

export const getProducts = async () => {
    try {
        const response = await api.get('/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

export default api;