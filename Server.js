const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const StudentRouter = require('./routes/StudentRouter')
require("dotenv").config();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.get('/',(req,res)=>{
  res.send("hey")
})
app.use("/cssFile", express.static("public  "));     
app.use("/profiles",express.static('uploads'))
// app.get("/", (req, res) => res.send("run Server"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
 app.use('/api/data',StudentRouter)

mongoose
  // .connect("mongodb+srv://yp8749881:yash123@yash.9nuv0.mongodb.net/rnw")
  .connect("mongodb://localhost:27017/rnw")
  .then(() => {
    console.log("db connected..");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);

// yash@pncl123
// AsPgE7UDWWr4f0Rf
