const MySQL = require('../service/mysql.service')
const ErrorAPI = require('../ErrorAPI')

// exports.getAllBook = async (req , res , next) =>{
//         const connection = MySQL.connection
//         const command = "select count(MaSach) as SoLuong , TenSach , MaTG , MaTL , MaNXB , NamXB, Image  from sach group by TenSach , MaTG , MaTL , MaNXB , NamXB, Image;"
//         connection.query(command,(err, result , field)=>{
//             if(err)
//                 return next(new ErrorAPI(400 , "Get All Book Error"))
//             return res.json(result)
//     })
// }
exports.getAllBook = async (req , res , next) =>{
            const connection = MySQL.connection
            const command = "CALL getBooksList('');"
            connection.query(command,(err, result , field)=>{
                if(err)
                    return next(new ErrorAPI(400 , "Get All Book Error"))
                return res.json(result[0])
        })
    }
exports.importBook = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const book = req.body
        book.number = book.number || 1

        const oneBook = `("${book.TenSach}",${book.MaTL},${book.MaTG},${book.MaNXB},${book.NamXB},'${book.Image}')`
        var insert = oneBook
        for (let index = 1 ; index < book.number ; index++) {
            insert = oneBook + ',' + insert
        }
        const command = `insert into Sach(TenSach,MaTL,MaTG,MaNXB,NamXB,Image) values ${insert}`
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
exports.deleteBook = async (req , res , next) =>{
        try {
            const connection = MySQL.connection
            const command = `delete from sach where masach = ${req.params.bid}`
                connection.query(command , (err, result , field)=>{

                if(!err){
                    if(result.affectedRows != 0)
                        return res.json(...result)
                    return res.json({message : "Book Not Found"})
                }
                console.log(err);
                return next(new ErrorAPI(400 , "Get Error When Query"))
            })
        } catch (error) {
            return next(new ErrorAPI(400 , "Get Error"))
        }   
    }

exports.GetBookHomeView = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const command = `select TenTL, TenSach, TenTG, Image
                        from tacgia, sach, theloai
                        where tacgia.MaTG = sach.MaTG and theloai.MaTL = sach.MaTL;`
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

exports.SortAscend = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const command = `CALL getBooksOrdered('', 'name_asc');`
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
exports.SearchBookByName = async (req , res , next) =>{
    try {
        const connection = MySQL.connection
        const command = `select theloai.TenTL, sach.TenSach, tacgia.TenTG, sach.Image 
                        from sach, theloai,tacgia 
                        where TenSach like "%${req.params.name}%" and tacgia.MaTG = sach.MaTG and theloai.MaTL = sach.MaTL`
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

// exports.example = async (req , res , next) =>{
//     try {
//         const connection = MySQL.connection
//         const command = ``
//             connection.query(command , (err, result , field)=>{
//             if(!err){
//                 return res.json(result)
//             }
//             console.log(err)
//             return next(new ErrorAPI(400 , "Get Error When Query"))
//         })
//     } catch (error) {
//         return next(new ErrorAPI(400 , "Get Error"))
//     }   
// }