const mysql     = require('mysql')

class MySQL{
    static connect = async (database)=>{
        if(!this.connection)
            this.connection = mysql.createConnection({...database})
        return this.connection
    }
}

module.exports = MySQL



