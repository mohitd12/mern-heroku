const express = require('express');

const router = express.Router();

// testimonial routes
const testimonialRoutes = require('./testimonial');

router.use('/testimonial', testimonialRoutes);

module.exports = router;
