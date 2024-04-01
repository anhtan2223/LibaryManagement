const MySQL = require('../service/mysql.service')
const ErrorAPI = require('../ErrorAPI')

exports.getAllMuonTra = async (req , res , next) =>{
    const connection = MySQL.connection
    const command = "select * from MuonTra"
    connection.query(command,(err, result , field)=>{
        if(err)
            return next(new ErrorAPI(400 , "Get All Publicer Error"))
        return res.json(result)
})}

exports.getMuonTraByID = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const command = `select * from MuonTra where mamt = ${req.params.id}`
        connection.query(command,(err, result , field)=>{
            if(err)
                return next(new ErrorAPI(400 , "Get Publicer ByID Error When Query"))
            if(result[0] != null)
                return res.json(...result)
            // console.log(result)
            return next(new ErrorAPI(400 , "ID Not-Found"))})
    } catch (error) {
        return next(new ErrorAPI(400 , "Get Publicer ByID Error"))
    }
}

