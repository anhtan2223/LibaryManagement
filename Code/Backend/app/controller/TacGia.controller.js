const MySQL = require('../service/mysql.service')
const ErrorAPI = require('../ErrorAPI')

exports.getAllTacGia = async (req , res , next) =>{
    const connection = MySQL.connection
    const command = "select * from tacgia"
    connection.query(command,(err, result , field)=>{
        if(err)
            return next(new ErrorAPI(400 , "Get All Author Error"))
        return res.json(result)
})}

exports.getTacGiaByID = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const command = `select * from TacGia where matg = ${req.params.id}`
        connection.query(command,(err, result , field)=>{
            if(err)
                return next(new ErrorAPI(400 , "Get Author ByID Error When Query"))
            if(result[0] != null)
                return res.json(...result)
            // console.log(result)
            return next(new ErrorAPI(400 , "ID Not-Found"))})
    } catch (error) {
        return next(new ErrorAPI(400 , "Get Author ByID Error"))
    }
}


exports.updateTacGia = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const data = req.body
        
        const command = `UPDATE tacgia
        SET
        matg = ${req.params.id}
        ${data.TenTG != undefined ? ",TenTG = '"+data.TenTG+"'" : ""} 
        ${data.Website != undefined ? ",Website = '"+data.Website+"'" : ""} 
        ${data.GhiChu != undefined ? ",GhiChu = '"+data.GhiChu+"'" : ""} 
        WHERE matg = ${req.params.id}`
        // console.log(command);
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

exports.deleteTacGia = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const command = `delete from TacGia
        WHERE matg = ${req.params.id}`
            connection.query(command , (err, result , field)=>{
            if(!err){
                if(!err){
                    if(result.affectedRows != 0)
                        return res.json({message : `Xoá Tác Giả ID = ${req.params.id} Thành Công`})
                    return res.json({message : "TacGia Not Found"})
                }
            }
            console.log(err)
            return next(new ErrorAPI(400 , "Get Error When Query"))
        })
    } catch (error) {
        return next(new ErrorAPI(400 , "Get Error"))
    }   
}

exports.createTacGia = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const data = req.body
        const command = `INSERT INTO TacGia (tentg${data.Website ? ",Website":""}${data.GhiChu ? ",GhiChu":""}) VALUES 
            ('${data.TenTG}' 
            ${data.Website ? ",'"+data.Website+"'"  :""}
            ${data.GhiChu ? ",'"+data.GhiChu+"'"  :""}
            )`
            connection.query(command , (err, result , field)=>{
            if(!err){
                return res.json({message : `Thêm vào thành công TacGia có ID là : ${result.insertId}`})
            }
            console.log(err)
            return next(new ErrorAPI(400 , "Get Error When Query"))
        })
    } catch (error) {
        return next(new ErrorAPI(400 , "Get Error"))
    }   
}