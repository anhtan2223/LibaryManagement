import AxiosInstance from './CreateAxios'
const defaultURL = 'http://localhost:3000'

class AxiosAPI
{
    constructor(URL = defaultURL )
    {
        this.api = AxiosInstance(URL)
    }
    async Login(username , password)
    {
        const data = 
        {
            username : username , 
            password : password
        }
        // const result = (await this.api
            // .post('/api/user/login',data)).data


        return {
                isAvailable     : true , 
                isTruePassword  : true ,
                // test            : result ,
                infomation      : {
                    RoleID  : 2 ,
                    HoTen   : "The Fish" ,
                    DiaChi  : "111 Đường Nguyễn Văn Linh, Quận Thanh Khê, Thành phố Đà Nẵng" ,
                    SDT     : "0123456780" ,
                    Email   : "vuthilan@gmail.com" ,
                    username: "admin" ,
                    password: "123" ,
                    IsActive: true
                }
            }
    }
}

export default new AxiosAPI()