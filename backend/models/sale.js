const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
  amount: { type: Number, required: true }
});

module.exports = mongoose.model('Sale', saleSchema);