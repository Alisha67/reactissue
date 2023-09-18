import HttpService from "../../../config/http.service";

class BannerService extends HttpService{
    createBanner= async (data)=>{
        try{
let response = await this.postRequest(
    '/v1/banner',
    data,
    {auth:true}
)
return response
        } catch(exception){
            throw exception
        }
    }

    listAllBannerData = async (perPage=10, page=1) => {
        try{
let response = await this.getRequest(
    '/v1/banner?perPage='+perPage+'&page='+page,
    {query: {perPage:perPage, page:page},
    auth:true}
    
)
return response
        } catch(exception){
            throw exception
        }

    }
    deleteBannerById = async (id)=>{
        try{
let response = await this.deleteRequest(
    '/v1/banner/'+id ,
    {auth:true}
)
return response
        } catch(exception){
            throw exception
        }
    }
}
const BannerSvc =new BannerService
export default BannerSvc