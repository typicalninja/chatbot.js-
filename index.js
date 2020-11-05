const fetch = require('node-fetch')

module.exports = function reply(string) {
   const reply = fetch(`https://some-random-api.ml/chatbot?message=${encodeURIComponent(string)}`)
    return reply;
  };
