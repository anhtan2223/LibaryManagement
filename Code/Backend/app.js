const express = require('express')
const cors = require("cors")

const app = express() 
const NhaXuatBan = require('./app/routes/NhaXuatBan.route')
const TheLoai = require("./app/routes/TheLoai.route")
const TacGia = require("./app/routes/TacGia.route")
const User = require("./app/routes/User.route")
const Sach = require("./app/routes/Sach.route")
const MuonTra = require("./app/routes/MuonTra.route")

app.use(cors())
app.use(express.json())

app.use("/api/nxb"      , NhaXuatBan)
app.use("/api/theloai"  , TheLoai   )
app.use("/api/tacgia"   , TacGia    )
app.use("/api/user"     , User      )
app.use("/api/sach"     , Sach      )
app.use("/api/muontra"  , MuonTra   )

app.get("/hello" , (req , res ) =>{
    res.json({message : "Hello World"})
})

module.exports = app 