const express = require("express");
const router = express.Router();

const Category = require("../../models/categories");

var multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "dsczip846",
  api_key: "629685747996971",
  api_secret: "6xYUhGeRLtconQh28HFqQzXSsr8",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "categoryIcon",
    format: async (req, file) => "png",
    public_id: (req, file) => "",
  },
});
const upload = multer({ storage: storage });

//GET
router.get("/", async (req, res) => {
  Category.find().then((items) => {
    res.json(items);
  });
});

//INSERT
router.post("/", async (req, res) => {
  try {
    const user_data = await new Category({
      name: req.body.name,
      image: req.body.image,
    });
    var data = user_data
      .save()
      .then(() => {
        res.status(200).json(data);
      })
      .catch((e) => {
        res.status(500).json(e);
      });
  } catch (err) {
    res.status(500).json(err.response);
  }
});

//UPDATE
router.put("/update", async (req, res) => {
  //console.log("req.file");
  try {
    const updata = await Category.findByIdAndUpdate(
      req.body._id,
      {
        name: req.body.name,
        image: req.body.image,
      },
      { new: true },
      function (err, response) {
        if (err) {
          res.json({
            message: "Update Failure",
          });
        }
        res.json({
          message: "Updated",
        });
      }
    );
    //console.log(updata);
  } catch (error) {
    res.json(error);
  }
});

//DELETE
router.delete("/delete/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    let response = await Category.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ result: "success" });
  } catch (err) {
    res.status(200).json({ result: "error", message: err.messageFormat });
  }
});

//Slider Part

module.exports = router;
