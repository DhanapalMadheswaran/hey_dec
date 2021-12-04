const express = require("express");

const router = express.Router();

const Banner = require("../../models/bannerModel");
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
    folder: "banner",
    format: async (req, file) => "png",
    public_id: (req, file) => "",
  },
});
const upload = multer({ storage: storage });

//GET
router.get("/", async (req, res) => {
  Banner.find().then((items) => {
    res.json(items);
  });
});

//INSERT
router.post("/", async (req, res) => {
  try {
    const user_data = await new Banner({
      redirectUrl: req.body.bannerRedirectUrl,
      bannerText: req.body.bannerText,
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
    const updata = await Banner.findByIdAndUpdate(
      req.body._id,
      {
        redirectUrl: req.body.bannerRedirectUrl,
        bannerText: req.body.bannerText,
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
  var del = await Banner.findByIdAndRemove(req.params.id).then((e) => {
    res.json({ msg: "Deleted" });
  });
});

//Slider Part

module.exports = router;
