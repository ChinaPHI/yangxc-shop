import axios from 'axios';
import apiconfig from '../../config/api.config';

const service = axios.create({
    baseURL:apiConfig.baseUrl
}) ;

vue.prototype.$http = service
export default service