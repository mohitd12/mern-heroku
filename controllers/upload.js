const config = require('config');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './files/');
	},
	filename: function(req, file, cb) {
		const uniqueFileName = Date.now() + path.extname(file.originalname);

		cb(null, uniqueFileName);
	}
});

const uploader = multer({
	storage: storage,
	limits: { fileSize: 52428800 }, // 50MB
	fileFilter: function(_req, file, cb) {
		const isValid = config.get('allowedFileTypes').includes(path.extname(file.originalname).slice(1).toLowerCase());

		if (!isValid) {
			return cb({ code: 'IMAGE_TYPE', message: 'Invalid image type' });
		}

		cb(null, true);
	}
});

module.exports = uploader;
