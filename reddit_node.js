var client = require("./client")

client.do_thing(function(err, res) {
  if (res && res.ok) {
    console.log(JSON.stringify(res.body));
  }
  else {
    console.log("failure");
  }
})
