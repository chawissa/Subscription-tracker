const Subscription = require('../models/subscriptionModel');

const subscriptionController = {
  getAllSubs(req, res, next) {
    Subscription.find({})
      .then((result) => {
        console.log('All the subscriptions: ', result);
        res.json(result);
        return next();
      })
      .catch((err) => {
        return next({
          log: 'subscriptionController.getAllSub error',
          message: 'Unable to laod all the subscriptions',
        });
      });
  },

  createSub(req, res, next) {
    // console.log(req.body);
    // const { name, price, comment } = req.body;
    // if (!name || !price) {
    //   return next({
    //     log: 'subscriptionController.createSub missing input data',
    //     message: { error: 'Missing input' },
    //   });
    // }

    Subscription.create(req.body)
      .then((result) => {
        console.log('result is: ', result);
        res.json({
          message: 'You have successfully added a new subscription',
          result,
        });
        return next();
      })
      .catch((err) => {
        return next({
          log: 'subscriptionController.createSub error',
          message: 'Unable to create the subscription',
        });
      });
  },

  updateSub(req, res, next) {
    Subscription.findByIdAndUpdate(req.params.id, req.body)
      .then((result) => {
        console.log('updatedResult: ', result);
        res.json({
          message: 'You have successfully updated subscription',
          result,
        });
        return next();
      })
      .catch((err) => {
        return next({
          log: 'subscriptionController.updateSub error',
          message: 'Unable to update the subscription',
        });
      });
  },

  deleteSub(req, res, next) {
    Subscription.findByIdAndRemove(req.params.id, req.body)
      .then((result) => {
        console.log('deletedResult: ', result);
        res.json({
          message: 'You have successfully deleted your subscription',
          result,
        });
        return next();
      })
      .catch((err) => {
        return next({
          log: 'subscriptionController.deleteSub error',
          message: 'Unable to delete the subscription',
        });
      });
  },
};

module.exports = subscriptionController;
