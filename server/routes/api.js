const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// Routes
// ROUTE HANDLER TO RESPOND WITH THE MAIN APP
router.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/index.html'));
});

// GET ALL SUBSCRIPTIONS ROUTE HANDLER
router.get('/', subscriptionController.getAllSubs);

// CREATE NEW SUBSCRIPTION ROUTE HANDLER
router.post('/', subscriptionController.createSub),
  (req, res) => {
    console.log('new subscription added successfully');
    res.status(200).json(res.locals.sub);
  };

// UPDATE SUBSCRIPTION ROUTE HANDLER
router.patch('/:name', subscriptionController.updateSub, (req, res) => {
  console.log('Updated successfully');
  res.status(200).json(res.locals.update);
});

// DELETE SUBSCRIPTION ROUTE HANDLER
router.delete('/:name', subscriptionController.deleteSub);

module.exports = router;
