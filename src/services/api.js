import axios from "axios";

const api = axios.create({
    // aqui vai a conection do backend
    baseURL: "localhost:3000",
    withCredentials: true
    
})
export default api;