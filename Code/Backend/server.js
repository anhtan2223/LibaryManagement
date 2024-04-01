const app = require('./app')
const config = require('./app/config/config')
const MySQL = require('./app/service/mysql.service')
const port = config.app.port


async function runServer()
{
    await MySQL.connect(config.database)
    MySQL.connection.connect((err)=>{
        if(err){
            console.log("Connect Fail" , err);
            return ;
        }
        console.log(`Connect To ${config.database.database} Success`);
        app.listen( port , () => {
            console.log(`Server Now Running at Port ${3000}`) })
    })   
}

runServer()

// {
//     "TenSach" : "Cuộc Phiêu Lưu Của Bí Mèo" ,
//     "MaTL": 3  ,
//     "MaTG": 2 ,
//     "MaNXB": 1 ,
//     "NamXB" : 2023 ,
//      "number" : 50 
//   }