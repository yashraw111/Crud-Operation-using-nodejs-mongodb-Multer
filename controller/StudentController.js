const Student = require("../model/StudentModel");
const path = require("path");
const fs = require("fs");
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
  console.log(res.body);
  try {
    const { std_name, std_email, std_grid } = req.body;
    var arr = [];
    req.files.std_profile.forEach((image) => {
      arr.push(image.filename);
    });
    if (req.files.std_resume !== undefined) {
      var singleImg = req.files.std_resume[0].filename;
    }
    const student = await Student.create({
      std_name,
      std_email,
      std_grid,
      std_profile: arr,
      std_resume: singleImg,
    });

    res.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
    });
  }
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

  try {
    const student = await Student.findById({ _id: id });
    res.json({
      success: true,
      student,
    });
  } catch (error) {
    console.log(error);
  }

  res.json({
    success: true,
  });
};

const trash = async (req, res) => {
  try {
    const { id } = req.params;

    const singlestd = await Student.findById(id);
    const image = path.join(__dirname, `../uploads/${singlestd.std_resume}`);
    console.log("image", image);
    fs.unlink(image, (err) => {
      if (err) {
        res.json("image is not deleted...");
      } else {
        console.log("image is deleted.........");
      }
    });
    const profileImg = singlestd.std_profile.forEach((images) => {
      const imagePro = path.join(__dirname, `../uploads/${images}`);
      fs.unlink(imagePro, (err) => {
        if (err) {
          console.log("image is not deleted...");
        } else {
          console.log("image is deleted.........");
        }
      });
    });
    await Student.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "recored deleted........",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: true,
      error,
    });
  }
};

const UpdateQuery = async (req, res) => {
  const { id } = req.query;
  // const update = req.body;
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
