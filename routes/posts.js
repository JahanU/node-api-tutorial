const express = require('express'); // Import package
const router = express.Router();
const POST_DB = require('../models/Post');

router.get('/', async (req, res) => {
    console.log('getting...')
    try {
        const posts = await POST_DB.find();
        res.send(posts);
        res.sendStatus(200);
    } catch (err) {
        res.json(err);
        console.log('error');
    }
});

router.post('/', async (req, res) => {
    console.log('posting..')
    const post = new POST_DB({
        title: req.body.title, // Breaking object into domain 
        desc: req.body.desc,
        age: req.body.age, 
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json(err);
    }
});

router.get('/:postId', async (request, response) => {
    try {
        const post = await POST_DB.findById(request.params.postId);
        response.json(post);
    }
    catch (err) {
        response.statusMessage = 'User not found!';
        response.sendStatus(400);
        // response.json('ID does not exist');
    }
});

router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await POST_DB.remove({_id: req.param.postId});   
        res.json(removedPost);
    }
    catch (err) {
        res.json(err)
    }
});

router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await POST_DB.updateOne(
            {_id: req.params.postId},
            { $set: { title: req.body.title }}
            );
        res.json(updatePost);
    }
    catch (err) {
        res.json(err)
    }
});


module.exports = router;