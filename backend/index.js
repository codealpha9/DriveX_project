const express= require('express')
const multer= require('multer')
const cors= require('cors')
const path= require('path')
const fs= require('fs')
const app = express()
app.use(cors())


const upload=multer({dest:'uploads/'})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.post('/upload',upload.single('file'),(req,res)=>{
    const filePath=req.file.path;
    fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err){
        return res.status(500).send('Error')
    }
    res.send(data)
    })
})
app.listen('3000',()=>{
    console.log('Server is running on port 3000')
})