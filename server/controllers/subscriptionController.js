const Subscription = require('../models/subscriptionModel');
// const subscriptionController = {};

const subscriptionController = {
  getAllSubs(req, res, next) {
    Subscription.find({})
      .then((result) => {
        console.log('All the subscriptions: ', result);
        res.json(result);
        // res.locals.subs = result;
        return next();
      })
      .catch((err) => next({ err }));
  },

  createSub(req, res, next) {
    // console.log(req.body);
    const { name, price, comment } = req.body;
    if (!name || !price) {
      return next({
        log: 'subscriptionController.createSub missing input data',
        message: { error: 'Missing input' },
      });
    }

    Subscription.create(req.body)
      .then((result) => {
        console.log('result is: ', result);
        // res.json(result);
        res.locals.sub = result;
        return next();
      })
      .catch((err) => next({ err }));
  },

  updateSub(req, res, next) {
    const { id } = req.params;
    // const { name, price, comment } = req.body;
    // if (!id)
    //   return next({
    //     log: 'subscriptionController.updateSub ERROR: propery on request params undefined',
    //     message: {
    //       error:
    //         'subscriptionController.updateSub ERROR: Incorrect data received',
    //     },
    //   });

    Subscription.findByIdAndUpdate(id, req.body)
      .then((result) => {
        console.log('updatedResult: ', result);
        res.locals.update = result;
        return next();
      })
      .catch((err) => next({ err }));
  },

  deleteSub(req, res, next) {
    const { id } = req.params;

    Subscription.findByIdAndRemove(id, req.body)
      .then((result) => {
        console.log('deletedResult: ', result);
        return next();
      })
      .catch((err) => next({ err }));
  },
};

module.exports = subscriptionController;
