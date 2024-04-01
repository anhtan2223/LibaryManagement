const MySQL = require('../service/mysql.service')
const ErrorAPI = require('../ErrorAPI')

exports.getAllTheLoai = async (req , res , next) =>{
    const connection = MySQL.connection
    const command = "select * from theloai"
    connection.query(command,(err, result , field)=>{
        if(err)
            return next(new ErrorAPI(400 , "Get All TheLoai Error"))
        return res.json(result)
})}
exports.getTheLoaiByID = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const command = `select * from TheLoai where matl = ${req.params.id}`
        connection.query(command,(err, result , field)=>{
            if(err)
                return next(new ErrorAPI(400 , "Get TheLoai ByID Error When Query"))
            if(result[0] != null)
                return res.json(...result)
            // console.log(result)
            return next(new ErrorAPI(400 , "ID Not-Found"))})
    } catch (error) {
        return next(new ErrorAPI(400 , "Get TheLoai ByID Error"))
    }
}



exports.updateTheLoai = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const data = req.body
        const command = `UPDATE theloai
        SET
        ${data.TenTL != undefined ? "TenTL = '"+data.TenTL+"'" : ""} 
        WHERE matl = ${req.params.id}`
            connection.query(command , (err, result , field)=>{
            if(!err){
                return res.json(result)
            }
            console.log(err)
            return next(new ErrorAPI(400 , "Get Error When Query"))
        })
    } catch (error) {
        return next(new ErrorAPI(400 , "Get Error"))
    }   
}

exports.deleteTheLoai = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const command = `delete from theloai
        WHERE matl = ${req.params.id}`
            connection.query(command , (err, result , field)=>{
            if(!err){
                if(!err){
                    if(result.affectedRows != 0)
                        return res.json({message : `Delete ${result.affectedRows} TheLoai success `})
                    return res.json({message : "TheLoai Not Found"})
                }
            }
            console.log(err)
            return next(new ErrorAPI(400 , "Get Error When Query"))
        })
    } catch (error) {
        return next(new ErrorAPI(400 , "Get Error"))
    }   
}


exports.createTheLoai = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const data = req.body
        const command = `INSERT INTO TheLoai (tentl) VALUES ('${data.TenTL}') `
            connection.query(command , (err, result , field)=>{
            if(!err){
                return res.json({message : `Thêm vào thành công TheLoai có ID là : ${result.insertId}`})
            }
            console.log(err)
            return next(new ErrorAPI(400 , "Get Error When Query"))
        })
    } catch (error) {
        return next(new ErrorAPI(400 , "Get Error"))
    }   
}