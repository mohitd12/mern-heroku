const config = require('config');
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// models
const Testimonial = require('../models/Testimonial');

// controllers
const MulterUploader = require('../controllers/upload');

// set only one photo upload at a time
const uploader = MulterUploader.single('photo');

/**
 * @description Get all testimonials
 */
router.get('/', async (req, res, next) => {
	await Testimonial.find({ active: 1 }, (err, doc) => {
		if (err) return next({ message: 'Internal error occured', data: doc, status: 500 });

		if (doc.length < 1) return res.status(200).json({ message: 'No data found', data: doc });

		res.status(200).json({ message: 'Data found', data: doc });
	});
});

/**
 * @description View a testimonials by ID
 */
router.get('/:id', async (req, res, next) => {
	if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
		return next({ status: 400, message: 'Object ID is invalid', data: {} });
	}

	await Testimonial.findById(req.params.id, (err, doc) => {
		if (err) return res.status(500).json({ message: 'Internal error occured', data: doc });

		if (!doc) return res.status(200).json({ message: 'No data found', data: doc });

		res.status(200).json({ message: 'Data found', data: doc });
	});
});

/**
 * @description Create a testimonial
 */
router.post('/', async (req, res) => {
	uploader(req, res, async function(err) {
		if (err && err.code === 'IMAGE_TYPE') {
			return res.status(400).json({ message: err.message, data: {} });
		} else if (err && err.code === 'LIMIT_FILE_SIZE') {
			return res.status(400).json({ message: err.message + ' [max:50mb]', data: {} });
		} else if (err && err.code === 'LIMIT_UNEXPECTED_FILE') {
			return res.status(400).json({ message: err.message, data: {} });
		} else if (err) {
			return res.status(400).json({ message: 'Something went wrong', data: {} });
		}

		let photoUrl = '';

		if (req.file) {
			photoUrl = 'http://' + req.hostname + ':' + config.get('server.port') + '/' + req.file.filename;
		}

		const obj = {
			photo: photoUrl,
			name: req.body.name,
			post: req.body.post,
			description: req.body.description
		};

		await Testimonial.create(obj, (err, doc) => {
			if (err) return res.status(500).json({ message: 'Internal error occured', data: {}, err });

			res.status(200).json({ message: 'Testimonial created successfully', data: doc });
		});
	});
});

/**
 * @description Update a testimonial by ID
 */
router.post('/:id', async (req, res) => {
	if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
		return res.status(400).json({ message: 'Object ID is invalid', data: {} });
	}

	uploader(req, res, async function(err) {
		if (err && err.code === 'IMAGE_TYPE') {
			return res.status(400).json({ message: err.message, data: {} });
		} else if (err && err.code === 'LIMIT_FILE_SIZE') {
			return res.status(400).json({ message: err.message + ' [max:50mb]', data: {} });
		} else if (err && err.code === 'LIMIT_UNEXPECTED_FILE') {
			return res.status(400).json({ message: err.message, data: {} });
		} else if (err) {
			return res.status(400).json({ message: 'Something went wrong', data: {} });
		}

		let photoUrl = '';

		if (req.file) {
			photoUrl = 'http://' + req.hostname + ':' + config.get('server.port') + '/' + req.file.filename;
		}

		const obj = {};

		if (req.body.name) {
			obj.name = req.body.name;
		}

		if (req.body.post) {
			obj.post = req.body.post;
		}

		if (req.body.description) {
			obj.description = req.body.description;
		}

		if (photoUrl.length > 0) {
			obj.photo = photoUrl;
		}

		await Testimonial.findByIdAndUpdate(req.params.id, obj, { new: true }, (err, doc) => {
			if (err) return res.status(500).json({ message: 'Internal error occured', data: {}, err });

			res.status(200).json({ message: 'Testimonial updated successfully', data: doc });
		});
	});
});

/**
 * @description Delete a testimonial
 */
router.delete('/:id', async (req, res) => {
	if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
		return res.status(400).json({ message: 'Object ID is invalid', data: {} });
	}

	await Testimonial.findOneAndUpdate({ _id: req.params.id, active: 1 }, { active: 0 }, (err, doc) => {
		if (err) return res.status(500).json({ message: 'Internal error occured', data: {} });

		if (!doc) return res.status(200).json({ message: 'No data found', data: {} });

		res.status(200).json({ message: 'Testimonial removed successfully', data: doc });
	});
});

module.exports = router;
