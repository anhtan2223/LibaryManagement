const MySQL = require('../service/mysql.service')
const ErrorAPI = require('../ErrorAPI')

exports.getAllTTV = async (req , res , next) =>{
    const connection = MySQL.connection
    const command = "select * from TheThuVien"
    connection.query(command,(err, result , field)=>{
        if(err)
            return next(new ErrorAPI(400 , "Get All TTV Error"))
        return res.json(result)
})}

exports.getTTVByID = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const command = `select * from TheThuVien where madg = ${req.params.id}`
        connection.query(command,(err, result , field)=>{
            if(err)
                return next(new ErrorAPI(400 , "Get TTV ByID Error When Query"))
            if(result[0] != null)
                return res.json(...result)
            // console.log(result)
            return next(new ErrorAPI(400 , "ID Not-Found"))})
    } catch (error) {
        return next(new ErrorAPI(400 , "Get TTV ByID Error"))
    }
}