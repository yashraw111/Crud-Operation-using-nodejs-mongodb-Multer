const express = require('express')
const app = express()
const router = express.Router()
const StudentController = require('../controller/StudentController')
const upload = require('../middleware/uploadfile')

// app.post('/',StudentController.store)
// app.post('/',upload.array('std_profile',4),StudentController.store)

const multipleImg =[
    {name:"std_profile",maxCount:6},
    {name:'std_resume',maxCount:1}
]
app.post('/',upload.fields(multipleImg) ,StudentController.store)
app.get('/',StudentController.index)
app.get('/:id',StudentController.single)
app.delete('/:id',StudentController.trash)
app.patch('/',StudentController.UpdateQuery)
app.put('/',StudentController.UpdateQuery)

module.exports =app