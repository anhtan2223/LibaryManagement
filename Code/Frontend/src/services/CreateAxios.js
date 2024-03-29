import axios from 'axios'

//return InstanceAxios to use for all
export default function(URL) 
{
    return axios.create({
        baseURL : URL ,
        headers : {
            'Content-Type'      : "application/json" ,
            'Accept'            : "application/json"
        }
    })
}