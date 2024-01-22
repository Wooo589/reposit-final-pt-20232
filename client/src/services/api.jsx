import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:5173',
});

export const getItems = async(userId, query) => {
    let url = `users/${userId}/items`

    if (query !== '') {
        url += `?q=${query}`;
    }

    return api.get(url);
};