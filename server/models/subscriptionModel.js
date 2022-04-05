const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  comment: { type: String },
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
