import axios from "axios";

export default class ProductService {
    static async getAll(limit) {
        const response = await axios.get('http://localhost:3001/sneakers', {
            params: {
                _limit: limit
            }
        });
        return response;
    }
};