const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// Routes

// GET ALL SUBSCRIPTIONS ROUTE HANDLER
router.get('/', subscriptionController.getAllSubs);

// CREATE NEW SUBSCRIPTION ROUTE HANDLER
router.post('/', subscriptionController.createSub);
// (req, res) => {
//   console.log('new subscription added successfully');
//   res.status(200).json(res.locals.sub);
// };

// UPDATE SUBSCRIPTION ROUTE HANDLER
router.patch('/:id', subscriptionController.updateSub);
//  (req, res) => {
//   console.log('Updated successfully');
//   res.status(200).json(res.locals.update);
// });

// DELETE SUBSCRIPTION ROUTE HANDLER
router.delete('/:id', subscriptionController.deleteSub);

module.exports = router;
