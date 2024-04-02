const MySQL = require('../service/mysql.service')
const ErrorAPI = require('../ErrorAPI')

exports.getAllNXB = async (req , res , next) =>{
    const connection = MySQL.connection
    const command = "select * from NhaXuatBan"
    connection.query(command,(err, result , field)=>{
        if(err)
            return next(new ErrorAPI(400 , "Get All Publicer Error"))
        return res.json(result)
})}

exports.getNXBByID = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const command = `select * from NhaXuatBan where manxb = ${req.params.id}`
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


exports.updateNXB = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const data = req.body
        const command = `UPDATE nhaxuatban
        SET
        manxb = ${req.params.id}
        ${data.TenNXB != undefined ? ",TenNXB = '"+data.TenNXB+"'" : ""} 
        ${data.DiaChi != undefined ? ",DiaChi = '"+data.DiaChi+"'" : ""} 
        ${data.Email != undefined ? ",Email = '"+data.Email+"'" : ""} 
        ${data.NguoiDaiDien != undefined ? "NguoiDaiDien = '"+data.NguoiDaiDien+"'" : ""} 
        WHERE manxb = ${req.params.id}`
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

exports.deleteNXB = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const command = `delete from NhaXuatBan
        WHERE manxb = ${req.params.id}`
            connection.query(command , (err, result , field)=>{
            if(!err){
                if(!err){
                    if(result.affectedRows != 0)
                        return res.json({message : `Xoá ${result.affectedRows} Nhà Xuất Bản ID = ${req.params.id} Thành Công `})
                    return res.json({message : "NhaXuatBan Not Found"})
                }
            }
            console.log(err)
            return next(new ErrorAPI(400 , "Get Error When Query"))
        })
    } catch (error) {
        return next(new ErrorAPI(400 , "Get Error"))
    }   
}

exports.createNXB = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const data = req.body
        const command = `INSERT INTO Nhaxuatban (tennxb ${data.DiaChi ? ",DiaChi":""}${data.Email ? ",Email":""}${data.NguoiDaiDien ? ",NguoiDaiDien":""}) VALUES 
            (
            '${data.TenNXB}'
            ${data.DiaChi ? ",'"+data.DiaChi+"'"  :""}
            ${data.Email ? ",'"+data.Email+"'" :""}
            ${data.NguoiDaiDien ? ",'"+data.NguoiDaiDien+"'" :""}

            )`
            connection.query(command , (err, result , field)=>{
            if(!err){
                return res.json({message : `Thêm vào thành công NXB có ID là : ${result.insertId}`})
            }
            console.log(err)
            return next(new ErrorAPI(400 , "Get Error When Query"))
        })
    } catch (error) {
        return next(new ErrorAPI(400 , "Get Error"))
    }   
}

