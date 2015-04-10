var request = require("superagent");

var client = {
  get_posts: function(cb){
    request
      .get("http://www.reddit.com/r/subreddit.json")
      .end(cb);
    }

  do_thing: function(cb){
    request
      .get("http://www.reddit.com/r/InvisibleBicycles.json")
      .end(cb);
    }
  }

module.exports = client
