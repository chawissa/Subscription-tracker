const Subscription = require('../models/subscriptionModel');
// const subscriptionController = {};

const subscriptionController = {
  createSub = (req, res, next) => {
  // console.log(req.body);
    const { name, price, comment } = req.body;
    if (!name || !price) {
      return next({
      log: 'subscriptionController.createSub missing input data',
      message: { error: 'Missing input' },
      });
    }

    Subscription.create({ name, price, comment })
      .then((result) => {
        console.log('result is: ', result);
        res.locals.subs = result;
        return next();
      })
      .catch((err) => next({ err }));
  }
};

module.exports = subscriptionController;
