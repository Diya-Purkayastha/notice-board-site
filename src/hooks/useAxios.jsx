import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `https://notice-board-server-pearl.vercel.app/`
})

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;