const app = require('./app')
const config = require('./app/config/config')
const MySQL = require('./app/service/mysql.service')
const port = config.app.port


async function runServer()
{
    await MySQL.connect(config.database)
    MySQL.con.connect((err)=>{
        if(err){
            console.log("Connect Fail" , err);
            return 
        }
        console.log(`Connect To ${config.database.database} Success`);
    })

    await app.listen( port , () => {
        console.log(`Server Now Running at Port ${3000}`) })
}

runServer()