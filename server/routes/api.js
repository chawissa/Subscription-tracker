const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// Routes

// GET ALL SUBSCRIPTIONS ROUTE HANDLER
router.get('/', subscriptionController.getAllSubs);

// CREATE NEW SUBSCRIPTION ROUTE HANDLER
router.post('/', subscriptionController.createSub);

// UPDATE SUBSCRIPTION ROUTE HANDLER
router.put('/:id', subscriptionController.updateSub);

// DELETE SUBSCRIPTION ROUTE HANDLER
router.delete('/:id', subscriptionController.deleteSub);

module.exports = router;
