import express from 'express'
import { getTweetById, getTweets } from '../../controllers/tweetController.js';


const router = express.Router(); //create a new router object


router.get('/', getTweets); // similar to get put post in app.get it also work in this manner 
    


router.get('/:id', getTweetById); // similar to get put post in app.get it also work in this manner 
    
export default router;