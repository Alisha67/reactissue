import HttpService from "../../config/http.service";
class AuthService extends HttpService {
    login = async (credentail) => {
        try {
            let response = await this.postRequest('/v1/auth/login', credentail)            //3 ta parameter linxa euta url arko data ani 3rd ma config but yesma login ma na file pathaunu xa na header so 3rd [paramter ayena]
            // todo login handle
            return response;
        } catch (exception) {
            throw exception
        }
    }
    activationToken = async (token) => {
        try {
            let response = await this.getRequest(
                'v1/auth/verify-token/' + token
            )
            console.log(response)
        } catch (exception) {
            throw exception
        }

    }

    register = async (data) => {
        try {
            let response = await this.postRequest('v1/auth/register', data, { file: true })           //3 ta parameter linxa euta url arko data ani 3rd ma config regiter yesma a file pathaunu xa  so 3rd ayo
            return response
        } catch (exception) {
            throw exception
        }
    }

    setPassword = async (token, password) => {
        try {
            let response = await this.postRequest(
                '/v1/auth/password-set/'+token,
                password
            )
            return response
        } catch (exception) {
            throw exception
        }
    }

    getLoggedInUser = async ()=>{
        try{
let response = await this.getRequest(
    '/v1/auth/me', {
        auth:true
    }
    
)
return response
        }catch(exception){
            throw exception
        }
    }

}
// logOutUser = async ()=>{
// try{
// let response =  await this.postRequest('v1/auth/logout' , {} ,{auth:true});
// return (response)
// }catch(exception){
//     throw exception
// }
// }
const authSvc = new AuthService();  // object nai banaidiyeko ho sidhaai export garna ko sata sp that i can export svc
export default authSvc;