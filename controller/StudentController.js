const Student = require("../model/StudentModel");

// one file upalod
// const store = async(req,res)=>{
//     const {std_name,std_email,std_grid} = req.body
//     console.log(req.file);
//     // res.json({
//     //     success:true
//     // })

//     console.log(std_name);
//     try {
//         if(std_name == "" || std_email== "" || std_grid==""){
//             res.json("all field is Required")
//         }
//         else{
//             const student = await Student.create(
//                 {std_name,std_email,std_grid , std_profile:req.file ? req.file.filename : null}
//             )
//             res.json({
//                 success:true,
//                 student
//             } )
//         }
//     } catch (error) {
//         console.log(error);
//         res.json("error")
//     }
// }

// multiple image uplaod

// const store = async(req,res)=>{
//         const {std_name,std_email,std_grid} = req.body
//         console.log(req.files);
//         // res.json({
//         //     success:true
//         // })
//        var arr = []

//        req.files.forEach((image)=>{
//         arr.push(image.filename)
//        })

//         console.log(std_name);
//         try {
//             if(std_name == "" || std_email== "" || std_grid==""){
//                 res.json("all field is Required")
//             }
//             else{
//                 const student = await Student.create(
//                     {std_name,std_email,std_grid , std_profile:arr}
//                 )
//                 res.json({
//                     success:true,
//                     student
//                 } )
//             }
//         } catch (error) {
//             console.log(error);
//             res.json("error")
//         }
//     }

// multiple field upload

const store = async (req, res) => {
  const { std_name, std_email, std_grid } = req.body;
//   console.log(req.files);

var arr = []
req.files.std_profile.forEach((image)=>{
    // console.log(image.filename);
    arr.push(image.filename)
})

if(req.files.std_resume !== undefined){
   var singleImg = req.files.std_resume[0].filename
}

// console.log(singleImg);
const student = await Student.create({std_name,std_email,std_grid,std_profile:arr,std_resume:singleImg})


  res.json({
    success:true
  })
};

const index = async (req, res) => {
  try {
    const student = await Student.find();
    res.json({
      success: true,
      student,
    });
  } catch (error) {
    console.log(error);
  }
};

const single = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  // try {
  //     const student = await Student.findById({_id:id})
  //     res.json({
  //        success:true,
  //        student
  //     })
  // } catch (error) {
  //     console.log(error);
  // }

  res.json({
    success: true,
  });
};
const trash = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findByIdAndDelete(id);
    res.json("record deleted");
  } catch (error) {
    console.log(error);
  }
};
const UpdateQuery = async (req, res) => {
  const { id } = req.query;
  const update = req.body;
  const { std_name, std_email, std_grid } = req.body;
  const find = await Student.findByIdAndUpdate(
    {
      _id: id,
    },
    {
      std_name,
      std_email,
      std_grid,
    }
  );
  res.json({
    success: true,
    message: "record updated",
  });
};
module.exports = { store, index, single, trash, UpdateQuery };
