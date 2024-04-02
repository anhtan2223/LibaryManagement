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
    async LockAccount(id)
    {
        const data = {isActive : 0}
        return (await this.api.put(`/api/user/${id}` , data )).data
    }
    async UnlockAccount(id)
    {
        const data = {isActive : 1}
        return (await this.api.put(`/api/user/${id}` , data )).data
    }

    async GetAllAuthor() {
        return (await this.api.get('/api/tacgia')).data
    }
    async GetAuthorByID(id) {
        return (await this.api.get(`/api/tacgia/${id}`)).data
    } 
    async AddAuthor(data) {
        return (await this.api.post('/api/tacgia' , data)).data
    }
    async UpdateAuthor(id,data) {
        return (await this.api.put(`/api/tacgia/${id}` , data)).data
    }
    async DeleteAuthorByID(id) {
        return (await this.api.delete(`/api/tacgia/${id}`)).data
    }

    async GetAllCategories() {
        return (await this.api.get('/api/theloai')).data
    }
    async GetCategoryByID(id) {
        return (await this.api.get(`/api/theloai/${id}`)).data
    } 
    async AddCategory(data) {
        return ( await this.api.post(`/api/theloai` , data)).data
    }
    async UpdateCategory(id,data) {
        return (await this.api.put(`/api/theloai/${id}` , data)).data
    }
    async DeleteCategoryByID(id) {
        return (await this.api.delete(`/api/theloai/${id}`)).data
    } 

    async GetAllPublisher() {
        return (await this.api.get('/api/nxb')).data
    }
    async GetPublisherByID(id) {
        return (await this.api.get(`/api/nxb/${id}`)).data
    } 
    async AddPublisher(data) {
        return ( await this.api.post(`/api/nxb` , data)).data
    } 
    async UpdatePuclisher(id,data) {
        return (await this.api.put(`/api/nxb/${id}` , data)).data
    }
    async DeletePublisherByID(id) {
        return (await this.api.delete(`/api/nxb/${id}`)).data
    } 

    async GetAllAccount() {
        return (await this.api.get('/api/user')).data
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
    async AddBook(data) {
        return ( await this.api.post(`/api/sach` , data)).data
    } 

    async GetStatistic() {
        return (await this.api.get('/api/user/statistic')).data
    }
    async GetOverExpired() {
        return (await this.api.get('/api/user/expired')).data
    }
    async GetRecentBorrowed() {
        return (await this.api.get('/api/user/borrowed')).data
    }
}
    

export default new AxiosAPI()