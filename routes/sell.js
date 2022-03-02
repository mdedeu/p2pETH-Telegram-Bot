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
router.post('/sell_made/eth', async (req, res) => {
  const sellOrder = await Sell.find({user: req.body.user}, function(err, user) 
  {
    if (err)
    {
         res.send(err);
    }
    console.log(user);
    res.json(user);
  });

  if(sellOrder.user != req.body.user){
    req.status(403).send()
  }
  
  Sell.deleteOne(sellOrder.id)

})

module.exports = router