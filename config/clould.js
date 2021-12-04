var path = require("path");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: "dsczip846",
  api_key: "629685747996971",
  api_secret: "6xYUhGeRLtconQh28HFqQzXSsr8"
});

module.exports=cloudinary;