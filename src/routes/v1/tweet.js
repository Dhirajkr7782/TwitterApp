import express from 'express'


const router = express.Router(); //create a new router object


router.get('/', (req, res) => { // similar to get put post in app.get it also work in this manner 
    return res.json({
        message: 'Welcome to the tweet route'
    });
});


router.get('/:id', (req, res) => { // similar to get put post in app.get it also work in this manner 
    return res.json({
        message: 'Welcome to the tweet route',
        id: req.params.id
    });
});

export default router;