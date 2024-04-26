import axios from "axios"
import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from "../constants/config.js"
const API_URL = "http://localhost:8000/api"

const axiosInstance = axios.create(
    {
        baseURL: API_URL,
        timeout: 10000,
        headers: { 
            'Content-Type': 'application/json', 
            'Cookie': 'csrftoken=YFPixeuwLQmkrAAJR2oUi2GhaVbX4W4y; sessionid=upn6h7kqqjyd21klqjlsn5k34ocn28ju'
          }
    }
)

axiosInstance.interceptors.request.use(
    function ( config ){
        return config;
    },
    function ( error ) {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function ( response ) {
        return processResponse(response)
    },
    function ( error ) {
        return Promise.reject(processError(error))
    }
)

const processResponse = (response) => {
    if( response?.status === 200) {
        return { isSuccess : true , data : response.data}
    } else {
        return {
            isFailure: true,
            status : response?.status,
            msg : response?.msg,
            code : response?.code
        }
    }
}

const processError = (error) => {
    if(error.response){
        console.log("Error in response")
        return {
            isError : true,
            msg : API_NOTIFICATION_MESSAGES.responsefailure,
            code : error.status.code
        }
    }
    else if(error.request){
        console.log("Error in request", error)
        return {
            isError : true,
            msg: API_NOTIFICATION_MESSAGES.requestfailure,
            code : ""
        }
    }
    else{
        console.log("Error in network", error)
        return {
            isError: true,
            msg : API_NOTIFICATION_MESSAGES.networderror,
            code : ""
        }
    }
}



const API = {}

for( const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body/*, showUploadProgress, showDownloadProgress*/) => 
    axiosInstance({
        method: value.method,
        url: value.url,
        responseType: value.responseType,
        data: body,
    })
}

export { API }
