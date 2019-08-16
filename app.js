var max_tweet_length = 140;

new Vue ({
    el: '#myTwitterPost',
    data: {
        tweet: '',
    },
    computed: {
        tweetIsOutOfRange: function() {
            return this.charactersRemaining == max_tweet_length || this.charactersRemaining < 0
        },
        charactersRemaining: function() {
            return max_tweet_length - this.tweet.length
        }
    }
})