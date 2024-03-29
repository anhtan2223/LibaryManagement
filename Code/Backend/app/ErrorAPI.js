class ErrorAPI extends Error{
    constructor(code , msg){
        super()
        this.statusCode = code
        this.message = msg
    }
}

module.exports = ErrorAPI