import axios from 'axios';
import type { Product } from '../types/Product';

const API_BASE_URL = 'http://localhost:8081'; // Adjust this to match your backend URL

export const getProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/products`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching products:', {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status
            });
        }
        throw error;
    }
};

export const createProduct = async (product: Product): Promise<Product> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/products`, product);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error creating product:', {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status
            });
        }
        throw error;
    }
}; 