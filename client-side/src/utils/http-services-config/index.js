import axios from 'axios'
import { decode } from '../local-storage';

export const httpClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        // ! the token is a variable which holds the token
        Authorization: `Bearer ${decode("expense-token") ? decode("expense-token") : ""}`
    }
});

export const fetchById = async (id) => {
    return await httpClient.get(`/expense?id=${id}`)
}