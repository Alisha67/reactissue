import axiosInstance from "../../../config/axios.config";
import HttpService from "../../../config/http.service";

class userService extends HttpService {
    createUser = async (data) => {
        try {
            let response = await this.postRequest(
                '/v1/category',
                data,
                { auth: true,
                    file:true }
            )
            return response
        } catch (exception) {
            throw exception
        }
    }
    updateUser = async(data ,id)=>{
        try{
let response = await this.putRequest(
    '/v1/category/'+id,
    data,
    {auth:true,file:true}
)
return response
        }catch(exception){
            throw exception
        }
    }

    listAllUserData = async (perPage = 10, page = 1) => {
        try {
            let response = await this.getRequest(
                '/v1/category?perPage=' + perPage + '&page=' + page,
                {
                    query: { perPage: perPage, page: page },
                    auth: true
                }

            )
            return response
        } catch (exception) {
            throw exception
        }

    }
    deleteUserById = async (id) => {
        try {
            let response = await this.deleteRequest(
                '/v1/category/'+id,
                { auth: true,
              
                }
            )
            return response
        } catch (exception) {
            throw exception
        }
    }
    getUserById = async (id) => {
        try {
            let response = await this.getRequest(
                '/v1/category/'+id,
                { auth: true,
              
                }
            )
            return response
        } catch (exception) {
            throw exception
        }
    }
}
const userSvc = new userService
export default userSvc