const MySQL = require('../service/mysql.service')
const ErrorAPI = require('../ErrorAPI')

exports.getAllBook = async (req , res , next) =>{
        const connection = MySQL.connection
        const command = "select count(MaSach) as SoLuong , TenSach , MaTG , MaTL , NamXB  from sach group by TenSach , MaTG , MaTL , NamXB"
        connection.query(command,(err, result , field)=>{
            if(err)
                return next(new ErrorAPI(400 , "Get All Book Error"))
            return res.json(result)
    })
}



exports.importBook = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const book = req.body
        book.number = book.number || 1

        const oneBook = `("${book.TenSach}",${book.MaTL},${book.MaTG},${book.MaNXB},${book.NamXB})`
        var insert = oneBook
        for (let index = 1 ; index < book.number ; index++) {
            insert = oneBook + ',' + insert
        }

        const command = `insert into Sach(TenSach,MaTL,MaTG,MaNXB,NamXB) values ${insert}`
            connection.query(command , (err, result , field)=>{
            if(!err){
                return res.json({message : `Insert success ${result.affectedRows} book ${book.TenSach}`})
            }
            console.log(err)
            return next(new ErrorAPI(400 , "Get Error When Query"))
        })
    } catch (error) {
        return next(new ErrorAPI(400 , "Get Error"))
    }
    
}

exports.getBookByID = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const command = `select * from sach where masach = ${req.params.bid}`
        connection.query(command,(err, result , field)=>{
            if(err)
                return next(new ErrorAPI(400 , "Get Book ByID Error When Query"))
            if(result[0] != null)
                return res.json(...result)
            // console.log(result)
            return next(new ErrorAPI(400 , "ID Not-Found"))})
    } catch (error) {
        return next(new ErrorAPI(400 , "Get Book ByID Error"))

    }
}



// exports.getAllBook = async (req , res , next) =>{
//     res.json("Hello Sach")
// }