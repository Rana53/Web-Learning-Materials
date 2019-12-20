// this rout for check multiple place can store in database
const path = require('path'); // for getting file extension
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Place = require('../models/place');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null,'uploads/places');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype ==='image/png'){
    cb(null, true);
  } else {
    cb(null, false);
  }
}
const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2
  },
  fileFilter: fileFilter
});

router.post('/', upload.array('photos',10),(req, res, next) => {
  const place = new Place({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
    address: {
      country: req.body.country,
      stateOrDivision: req.body.stateOrDivision
    }
  });
  req.files.forEach(e => {
    place.imagePath.push(e.path);
  });
  console.log(place);
  res.status(200).json({
    data: place
  })
});

module.exports = router;



// https://stackoverflow.com/questions/36096805/uploading-multiple-files-with-multer-but-from-different-fields
// https://github.com/expressjs/multer#fieldsfields