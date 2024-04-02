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
        const result = (await this.api
            .post('/api/user/login',data)).data
            return result
    }
    async UpdateAccount(id,data)
    {
        return (await this.api.put(`/api/user/${id}` , data )).data
    }
    async Register(data)
    {
        const result = (await this.api.post('/api/user',data)).data
        return result
    }

    async GetAllAuthor() {
        return (await this.api.get('/api/tacgia')).data
    }

    async GetAllCategories() {
        return (await this.api.get('/api/theloai')).data
    }

    async GetAllPublisher() {
        return (await this.api.get('/api/nxb')).data
    }

    async GetAllAccount() {
        return (await this.api.get('/api/user')).data
    }
}

export default new AxiosAPI()