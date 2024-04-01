const MySQL = require('../service/mysql.service')
const ErrorAPI = require('../ErrorAPI')

exports.getAllUser = async (req , res , next) =>{
    const connection = MySQL.connection
    const command = "select * from NguoiDung"
    connection.query(command,(err, result , field)=>{
        if(err)
            return next(new ErrorAPI(400 , "Get All User Error"))
        return res.json(result)
})}

exports.getUserByID = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const command = `select * from NguoiDung where uid = ${req.params.uid}`
        connection.query(command,(err, result , field)=>{
            if(err)
                return next(new ErrorAPI(400 , "Get User ByID Error When Query"))
            if(result[0] != null)
                return res.json(...result)
            // console.log(result)
            return next(new ErrorAPI(400 , "ID Not-Found"))})
    } catch (error) {
        return next(new ErrorAPI(400 , "Get User ByID Error"))

    }
}
exports.login = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const data = req.body
        const command = `select * from nguoidung where username = "${data.username}"`
            connection.query(command , (err, result , field)=>{
            if(!err){
                if(result[0] == null)
                    return res.json(
                        {isAvailable : false})

                if(result[0].password != data.password)
                    return res.json({
                        isAvailable : true , 
                        isTruePassword : false }) 
                return res.json({
                    isAvailable     : true , 
                    isTruePassword  : true ,
                    information     : result[0]
                })
            }
            console.log(err)
            return next(new ErrorAPI(400 , "Get Error When Query"))
        })
    } catch (error) {
        return next(new ErrorAPI(400 , "Get Error"))
    } 
}

exports.register = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const data = req.body
        const command = `INSERT INTO NguoiDung (RoleID , HoTen, DiaChi, SDT, Username, Password, IsActive , email) VALUES (${data.RoleID},'${data.HoTen}', '${data.DiaChi}', '${data.SDT}', '${data.username}', '${data.password}', ${data.isActive} , '${data.Email}') `
            connection.query(command , (err, result , field)=>{
            if(!err){
                return res.json({message : `Thêm vào thành công người dùng có ID là : ${result.insertId}`})
            }
            console.log(err)
            return next(new ErrorAPI(400 , "Get Error When Query"))
        })
    } catch (error) {
        return next(new ErrorAPI(400 , "Get Error"))
    }   
}


exports.updateUser = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const data = req.body
        const command = `UPDATE nguoidung
            SET
            ${data.HoTen != undefined ? "HoTen = '"+data.HoTen+"'" : ""} 
            ${data.DiaChi != undefined? ",DiaChi = '"+data.DiaChi + "'" : ""} 
            ${data.SDT!= undefined ? ",SDT = '"+data.SDT + "'" : ""}
            ${data.Email != undefined? ",Email = '"+data.Email + "'" : ""}
            ${data.isActive != undefined? ",isActive = "+data.isActive : ""}
            ${data.username != undefined? ",username = '"+data.username + "'" : ""}
            ${data.password != undefined? ",password = '"+data.password + "'" : ""}
            WHERE uid = ${req.params.uid};`

            connection.query(command , (err, result , field)=>{
            if(!err){
                return res.json( result )
            }
            console.log(err)
            return next(new ErrorAPI(400 , "Get Error When Query"))
        })
    } catch (error) {
        return next(new ErrorAPI(400 , "Get Error"))
    }   
}

exports.deleteUser = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const command = `delete from nguoidung
            WHERE uid = ${req.params.uid};`

            connection.query(command , (err, result , field)=>{
            if(!err){
                if(!err){
                    if(result.affectedRows != 0)
                        return res.json({message : `Delete ${result.affectedRows} User Success `})
                    return res.json({message : "User Not Found"})
                }
            }
            console.log(err)
            return next(new ErrorAPI(400 , "Get Error When Query"))
        })
    } catch (error) {
        return next(new ErrorAPI(400 , "Get Error"))
    }   
}