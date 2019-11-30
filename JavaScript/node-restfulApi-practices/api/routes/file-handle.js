const path = require('path'); // for getting file extension
const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, './uploads/');
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
const router = express.Router();
router.post('/single-image', upload.single('image'), (req, res, err) => {
  res.status(200).json({
    message: "image uploaded successfully"
  });
});


module.exports = router;



// https://stackoverflow.com/questions/36096805/uploading-multiple-files-with-multer-but-from-different-fields
// https://github.com/expressjs/multer#fieldsfields