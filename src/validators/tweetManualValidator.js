export const createTweetManualValidator = (req, res, next) =>{
      const tweet = req.body?.tweet;

    if(!tweet)
    {
        return res.status(400).json({
            error: 'Tweet is required'
        });
    }
   


if(tweet.length > 20)
{
    return res.status(400).json(
    {
        error:'tweet must be 280 character or less'
    });

}

 next();

};