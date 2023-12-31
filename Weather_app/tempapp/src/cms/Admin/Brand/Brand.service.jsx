import axiosInstance from "../../../config/axios.config";
import HttpService from "../../../config/http.service";

class BrandService extends HttpService {
    createBrand = async (data) => {
        try {
            let response = await this.postRequest(
                '/v1/brand',
                data,
                { auth: true,
                    file:true }
            )
            return response
        } catch (exception) {
            throw exception
        }
    }
    updateBrand = async(data ,id)=>{
        try{
let response = await this.putRequest(
    '/v1/brand/'+id,
    data,
    {auth:true,file:true}
)
return response
        }catch(exception){
            throw exception
        }
    }

    listAllBrandData = async (perPage = 10, page = 1) => {
        try {
            let response = await this.getRequest(
                '/v1/brand?perPage=' + perPage + '&page=' + page,
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
    deleteBrandById = async (id) => {
        try {
            let response = await this.deleteRequest(
                '/v1/brand/'+id,
                { auth: true,
              
                }
            )
            return response
        } catch (exception) {
            throw exception
        }
    }
    getBrandById = async (id) => {
        try {
            let response = await this.getRequest(
                '/v1/brand/'+id,
                { auth: true,
              
                }
            )
            return response
        } catch (exception) {
            throw exception
        }
    }
}
const BrandSvc = new BrandService
export default BrandSvc