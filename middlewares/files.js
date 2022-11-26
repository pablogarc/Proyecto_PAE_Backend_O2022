const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const name = new Date().getTime();
    const ext = file.originalname.split(".").pop();
    cb(null, `${name}.${ext}`);
  },
});

const filters = (req, file, cb) => {
  const isImage = file.mimetype.startsWith("image/");
  cb(null, isImage);
};

const file = multer({ storage: storage, fileFilter: filters });

module.exports = file;