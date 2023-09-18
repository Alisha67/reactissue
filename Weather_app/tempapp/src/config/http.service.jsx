import axiosInstance from "./axios.config";

class HttpService {
    _headers = {};

    setHeaders = (config) => {


        if (config.file) {
            this._headers = {
                "Content-Type": "multipart/form-data"
            }
        }

        if (config.auth) {

            let token = localStorage.getItem('token')
            if (!token) {
                throw new Error('user havent logged In')
            }
            this._headers = {
                ...this._headers,
                "Authorization": "Bearer " + token
            }

        }

        if (config.query) {
            this._headers = {
                ... this._headers,
                "Params": config.query
            }
        }
    }
    getRequest = async (url, config = {}) => {    //2ta paramter only url and cofig no data becz get method get data in term of queries
        try {
            this.setHeaders(config)
            let response = await axiosInstance.get(url, { headers: this._headers })
            return response;
        } catch (exception) {
            throw exception
        }
    }

    postRequest = async (url, data = {}, config = {}) => {
        try {
            this.setHeaders(config)
            let response = await axiosInstance.post(
                url,
                data,
                {
                    headers: this._headers
                }
            )
            return response;
        } catch (exception) {
            throw exception;
        }
    }
    deleteRequest = async (url, config = {}) => {
        try {
            this.setHeaders(config)
            let response = await axiosInstance.deleteRequest(
                url,
                {
                    headers: this._headers
                }
            )
            return response
        } catch (exception) {
            throw exception
        }
    }
}
export default HttpService