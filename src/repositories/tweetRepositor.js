import Tweet from "../schema/tweet.js";

export const createTweet = async ({ body }) =>{
    try{
        const tweet = await Tweet.create({ body});
        return tweet;
    }
    catch(error){
        throw error;
    }
}

export const getTweet = async ({ body }) =>{
    try{
        const tweet = await Tweet.find({ body});
        return tweet;
    }
    catch(error){
        throw error;
    }
}

export const getTweetById = async ({ tweetId }) => {
    try {
        const tweet = await Tweet.findById(tweetId); // ✅ corrected
        return tweet;
    } catch (error) {
        throw error;
    }
};

