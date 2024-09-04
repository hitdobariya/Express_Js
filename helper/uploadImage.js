const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploadImages');
    },
    filename: function (req, file, cb) {
    cb(null,`${Date.now()}_${file.originalname}`);
    }
});

exports.upload = multer({ storage: storage });
 
// https://www.figma.com/design/A5bPmwUiH9RfoluPAOpT2A/Furniture-Shopping-App-UI-Kit?node-id=0-36&node-type=CANVAS&t=jcu1Z743Fwxycw4C-0