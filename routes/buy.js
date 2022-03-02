const express = require('express');
const Joi = require('joi')

const Buy = require('../models/Buy');
const Sell = require('../models/Sell');

const router = express.Router()


router.post('/buy/eth', async (req, res) => {

    const schema = Joi.object({
        user: Joi.string(),
        gateway: Joi.string()
    })

    const result = schema.validate(req.body);
    
    if(result.error){
        res.status(400).send(result.error)
        return;
    }

    const buyOrder = new Buy({
      user: req.body.user,
      gateway: req.body.gateway
    });
    
    try{
        const savedBuyOrder = await post.save();
        
        const sellOrders = await Sell.find({gateway:  req.body.gateway}, function(err, user) 
        {
           if (err)
           {
               res.send(err);
           }
           console.log(user);
           res.json(user);
       
        });

        if(!sellOrders){
            req.status(404).send({error: "No Seller Found. Try Again"})
        }
        req.status(200).send(sellOrders);
    }catch{
        res.status(500).json({ message: error})
    }

    res.send(buyOrder);
})

module.exports = router