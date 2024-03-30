const mysql     = require('mysql')

class MySQL{
    static connect = async (database)=>{
        if(!this.con)
            this.con = mysql.createConnection({...database})
        return this.con
    }
}

module.exports = MySQL



