var path = require("path");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: "dsczip846",
  api_key: "***REMOVED***",
  api_secret: "***REMOVED***"
});

module.exports=cloudinary;