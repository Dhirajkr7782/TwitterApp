// src/index.js
import express from 'express';
import morgan from 'morgan';
import { PORT } from './config/serverConfig.js';
// import tweetRouter from './routes/tweet.js';
import apiRouter from './routes/apiRouter.js';
import connectDB from './config/dbConfig.js';

const app = express();

// function mid1(req, res, next) {
//     console.log('mid1');
//     next();
// }
// function mid2(req, res, next) {
//     console.log('mid2');
//     next();
// }

// function commonMid(req, res, next) {
//     console.log('commonMid');
//     next();
// }
// app.use(commonMid);



app.use(morgan('combined'));
app.use(express.json());
app.use('/api', apiRouter); // if request start with /api than pass through it other wise below

// app.use(express.text()); it is use whan text is pass




app.get('/ping', (req, res) => {
    return res.json({ message: 'pong' });
});



app.post('/hello', (req, res) => {

    console.log("query params", req.query);//qury params

    console.log("req body", req.body);//red body

    return res.json({
        message: 'world'
    });
});



app.get('/tweets/:tweet_id', (req, res) => {
    console.log(req.params);

    return res.json({
        message: 'tweet details'
    });
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
