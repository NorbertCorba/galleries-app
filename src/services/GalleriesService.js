import { httpService } from './HttpService';

class GalleriesService {
    constructor() {
        this.axiosInstance = httpService.axiosInstance;
    }

    async getAll() {
        const response = await this.axiosInstance.get('/galleries');
        return response.data;
    }

    async add(galleries) {
        const response = await this.axiosInstance.post('/create', galleries)
        return response;
    }

    async get(id) {
        const response = await this.axiosInstance.get(`/galleries/${id}`);
        return response;

    }
}


export default new GalleriesService();
