import axios from "axios";

// yapılacak bütün api isteklerinde ortak olarak kullanılacak base url header ve params'ların ayarlı oldugu axios olustur


const api = axios.create(
    {
        baseURL: 'https://api.themoviedb.org/3',
        params: { language: 'tr-TR' },
        headers: {
            accept: 'application/json',
            Authorization: import.meta.env.VITE_JWT_TOKEN

        }

    });

export default api;
