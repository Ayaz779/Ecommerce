const Payments = require('../models/Payment');
const router = require("express").Router();


//CREATE

router.post("/", async (req, res) => {
    const payment1 = new Payments(req.body);
  
    try {
      const saved_payment = await payment1.save();
      res.status(200).json(saved_payment);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET

  router.get("/", async (req, res) => {
  
    try {
      const Show_payment = await Payments.find();
    res.status(200).json(Show_payment);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //DELETE

    router.delete("/:id", async (req, res) => {
        try {
          await Payments.findByIdAndDelete(req.params.id);
          res.status(200).json("Payment has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      });

module.exports = router; 