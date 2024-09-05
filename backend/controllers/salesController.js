const Sale = require("../models/sale");

exports.createSale = async (req, res) => {
  try {
    const { productName, quantity, amount } = req.body;
    const sale = new Sale({ productName, quantity, amount });
    await sale.save();
    res.status(201).json({ message: 'Sale created successfully' });
  } catch (error) {
    res.status(200).json({ error: "Failed to create sale" });
  }
};

exports.getTopSales = async (req, res) => {
  try {
    const topSales = await Sale.find().sort({ amount: -1 }).limit(5);
    res.json(topSales);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve top sales" });
  }
};

exports.getTodayRevenue = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const todayRevenue = await Sale.aggregate([
      {
        $match: {
          timestamp: {
            $gte: today,
            $lt: tomorrow,
          },
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$amount" },
        },
      },
    ]);

    const revenue = todayRevenue.length > 0 ? todayRevenue[0].totalRevenue : 0;
    res.json({ todayRevenue: revenue });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve today's revenue" });
  }
};
