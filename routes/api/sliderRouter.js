const express = require("express");

const router = express.Router();

const Slider = require("../../models/sliderModel");
var path = require("path");
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
    folder: "slider",
    format: async (req, file) => "png",
    public_id: (req, file) => "",
  },
});
const upload = multer({ storage: storage });

//GET
router.get("/", async (req, res) => {
  Slider.find().then((items) => {
    res.json(items);
  });
});

//INSERT
router.post("/", async (req, res) => {
  try {
    const user_data = await new Slider({
      redirectUrl: req.body.sliderRedirectUrl,
      sliderText: req.body.sliderText,
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
  try {
    const updata = await Slider.findByIdAndUpdate(
      req.body._id,
      {
        redirectUrl: req.body.sliderRedirectUrl,
        sliderText: req.body.sliderText,
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
  var del = await Slider.findByIdAndRemove(req.params.id).then((e) => {
    res.json({ msg: "Deleted" });
  });
});

//Slider Part

module.exports = router;
