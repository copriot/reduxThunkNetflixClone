import axios from "axios";
// yapılacak bütün api isteklerinde ortak olarak kullanılacak base url header ve params'ların ayarlı oldugu axios olustur


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: { language: 'tr-TR' },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTdkNTk0NmQxYzFjNTU0M2I5NDE3ZGMxNmFkYTRhMiIsIm5iZiI6MTcyNzQ0NDYzMS44NDQ1NzEsInN1YiI6IjY2ZjZiNTA4N2IzMDcyNjg4ZDk2ODE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yvofJM-gyv0xF_mlad6f4K0_14hNUfCC4a6Ew6yuY_w'
    }
});
export default api;