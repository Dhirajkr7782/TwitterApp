import mongoose from "mongoose";
// import { maxLength } from "zod/v4";
const tweetSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
        trim: true,
        maxlength: 280
    }
});

const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet;