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
    async GetAuthorByID(id) {
        return (await this.api.get(`/api/tacgia/${id}`)).data
    } 

    async GetAllCategories() {
        return (await this.api.get('/api/theloai')).data
    }
    async GetCategoryByID(id) {
        return (await this.api.get(`/api/theloai/${id}`)).data
    } 

    async GetAllPublisher() {
        return (await this.api.get('/api/nxb')).data
    }
    async GetPublisherByID(id) {
        return (await this.api.get(`/api/nxb/${id}`)).data
    } 

    async GetAllAccount() {
        return (await this.api.get('/api/user')).data
    }

    async GetStatistic() {
        return (await this.api.get('/api/user/statistic')).data
    }

    async GetRecentBorrowed() {
        return (await this.api.get('/api/user/borrowed')).data
    }

    async GetOverExpired() {
        return (await this.api.get('/api/user/expired')).data
    }
    async GetAccountByID(id) {
        return (await this.api.get(`/api/user/${id}`)).data
    } 

    async GetAllBook(){
        return (await this.api.get('/api/sach')).data
    }
    async GetBookByID(id) {
        return (await this.api.get(`/api/sach/${id}`)).data
    } 

    async GetBookHome() {
        return (await this.api.get('/api/sach/home')).data
    }

    async SearchByName(name) {
        return (await this.api.get(`/api/sach/search/${name}`)).data
    }

    async SortAscend() {
        return (await this.api.get('api/sach/home/asc')).data
    }
}
    

export default new AxiosAPI()