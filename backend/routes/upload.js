/* eslint-disable no-undef */
const express = require("express");
const User = require("../models/user");
const router = express.Router();
const bcrypt = require("bcryptjs");
const cloudinary = require("cloudinary");
const multer = require("multer");

function imageResize(url) {
  const split = url.split("/image/upload");

  return `${split[0]}/w_366,h_320,c_scale${split[1]}`;
}
const cloudName = "droazviti";
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

const storage = multer.diskStorage({
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}.png`);
  },
});

const upload = multer({
  storage,
});

function cloudinarySaveImage(req) {
  return cloudinary.uploader.upload(req.file.path, async ({ secure_url }) =>
    Promise.resolve(imageResize(secure_url))
  );
}

router.post("/upload", upload.single("image"), (req, res) => {
  cloudinarySaveImage(req).then(async ({ secure_url }) => {
    req.body.image = secure_url;
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashpassword;
    const user = new User(req.body);

    user.save((err) => {
      if (err)
        return res.status(400).send({
          message: err,
        });

      user.populate((err, user) => {
        if (err)
          return res.status(500).send({
            message: "There was a problem.",
          });

        return res.status(201).send({
          message: "user created",
          user,
        });
      });
    });
  });
});

module.exports = router;
