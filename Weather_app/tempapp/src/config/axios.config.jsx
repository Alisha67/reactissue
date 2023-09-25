import axios from "axios";

const axiosInstance=axios.create({
    // NPX
baseURL:process.env.REACT_APP_API_URL,
// VITE
// baseURL:import.meta.env.VITE_API_URL,
timeout:30000 , /* in term of milisec 30sec so 3000*/
timeoutErrorMessage:"Server time out..." ,  /*after 30sec */
header:{                                             /*default header */
    "Accept":"application/json",   /*incoming data */
    "Content-type":"application/json"  /*pathauney data */
}
})

   axiosInstance.interceptors.response.use(

    (sucess)=>{
    return sucess;
    },
    (reject)=>{
    // todo
    throw reject?.response;
}

)

export default axiosInstance
// componet-----> axios call----> server
// component ----> axiosInstance---->Intercepts-----> axios call ----->server  (request garda)
// server----->axiosInstance----->Intercepts----->  component (reponse server lay pathauney) intercepts normally reponse ma garinxa

 
// server ko respone 2ta hunxa : (sucess (200) or ki reject(400 error or 500 error)) hunxa
// 422 400 401 403 404
