const express = require('express');
const Joi = require('joi')

const Post = require('../models/Post');

const router = express.Router()


router.post('/buy/eth', async (req, res) => {
    const schema = Joi.object({
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
        res.status(200).json({message: "yEY. Wait for a seller to appear"})
    }catch{
        res.status(500).json({ message: error})
    }

    res.send(buyOrder);
})

module.exports = router