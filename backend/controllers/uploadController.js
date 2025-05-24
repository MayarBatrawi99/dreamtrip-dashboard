import multer from "multer";
import path from "path";

// Set storage engine
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// File filter to accept only images (you can change later)
function fileFilter(req, file, cb) {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Images only!", false);
  }
}

const upload = multer({ storage, fileFilter });

// @desc    Handle file upload
// @route   POST /api/upload
// @access  Private
export const uploadImage = upload.single("image"); // This will attach file to req.file

export const uploadHandler = (req, res) => {
  res.send({ imagePath: `/${req.file.path}` });
};
