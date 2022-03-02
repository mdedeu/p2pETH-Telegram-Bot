const express = require('express');
const Post = require('../models/Sell')

const router = express.Router()

router.post('/sell/eth', async (req, res) => {
    const sellOrder = new Sell({
        user: req.body.user,
        gateway: req.body.gateway,
        price: req.body.price
      });
      const savedSellOrder = await post.save();
      res.status(200).json({message: "yEY. Wait for a buyer to appear"})
})

module.exports = router