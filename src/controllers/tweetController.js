import { success } from "zod/v4";
import { createTweet as createTweetService } from "../services/tweetService.js";


export const getTweets = (req, res) => {
    return res.json({
        message: 'Welcome to the tweet route'
    });
}


export const getTweetById = (req, res) => {
    return res.json({
        message: 'Welcome to the tweet route',
        id: req.params.id
    });
}

export const createTweet = async (req, res) => {
    try {
        console.log("Incoming req.body:", req.body);
        const responce = await createTweetService({
            body: req.body.body
        });
        return res.status(201).json({
            success: true,
            data: responce,
            message: 'Tweet create successfully'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
}
