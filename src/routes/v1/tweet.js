import express from 'express'
import { getTweets, getTweetById, createTweet} from '../../controllers/tweetController.js';
import validate from '../../validators/zodValidator.js';
import { tweetZodSchema } from '../../validators/tweetZodSchema.js';
import { s3Uploder} from '../../config/multerConfig.js';

const router = express.Router(); //create a new router object


router.get('/', getTweets); // similar to get put post in app.get it also work in this manner 
    


router.get('/:id', getTweetById); // similar to get put post in app.get it also work in this manner 

router.post('/',s3Uploder.single('tweetImage'), validate(tweetZodSchema), createTweet);
    
export default router;