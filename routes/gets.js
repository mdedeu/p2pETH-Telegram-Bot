const express = require('express');
const Post = require('../models/Post')

const router = express.Router()

router.get('/sell/eth', async (req, res) => {
    const buhe = await Post.find();
    res.send({message: "yEY. Now wait for buyers to appear in your DM's"})
})

module.exports = router