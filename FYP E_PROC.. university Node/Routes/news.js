const News = require('../models/News');
const router = require("express").Router();


//CREATE

router.post("/", async (req, res) => {
    const news1 = new News(req.body);
  
    try {
      const saved_news = await news1.save();
      res.status(200).json(saved_news);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //Get

  router.get("/", async (req, res) => {
  
    try {
      const news1 = await News.find();
    res.status(200).json(news1);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //DELETE

  router.delete("/:id", async (req, res) => {
    try {
      await News.findByIdAndDelete(req.params.id);
      res.status(200).json("News has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router; 