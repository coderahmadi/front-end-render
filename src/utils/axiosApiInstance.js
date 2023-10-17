import axios from "axios";

const axiosApiInstance = axios.create();
axiosApiInstance.defaults.baseURL = 'https://backend-express-deploy.onrender.com';

export default axiosApiInstance;