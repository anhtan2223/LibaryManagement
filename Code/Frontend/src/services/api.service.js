import AxiosInstance from './CreateAxios'
const defaultURL = 'http://localhost:3000'

class AxiosAPI
{
    constructor(URL = defaultURL )
    {
        this.api = AxiosInstance(URL)
    }
}

export default new AxiosAPI()