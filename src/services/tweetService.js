import { Filter } from "bad-words";
import { createTweet as createTweetRepo } from "../repositories/tweetRepositor.js";

export const createTweet = async ({body}) =>{
    const filter= new Filter();

    if(filter.isProfane(body)){
        console.log(body);
        console.log(filter.clean(body));
        throw new Error("Tweet contain blosck words");
    }
    const tweet = await createTweetRepo({body});
    return tweet;
}