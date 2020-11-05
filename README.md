# @typicalninja/chatbot.js

[![GitHub license](https://img.shields.io/github/license/typicalninja493/chatbot.js-)](https://github.com/typicalninja493/chatbot.js-/blob/main/LICENSE)

[![npm (scoped)](https://img.shields.io/npm/v/@typicalninja21/chatbot.js.svg)](https://www.npmjs.com/package/@typicalninja21/chatbot.js)

npm package chatbot.js 


## Install

```
$ npm i @typicalninja21/chatbot.js
```

## Usage

```js
const chat = require('@typicalninja21/chatbot.js')



chat.reply('hello').then(message => {
    console.log(message.response) // hello how are you
})
```


### usage in a discord bot



```js
const Discord = require('discord.js');
const chat = require('@typicalninja21/chatbot.js')

const client = new Discord.Client()

client.once('ready', async () => {
console.log('ready')
});

client.on('message', async message => {

  if (!message.channel.guild) return;
  
  if(message.author.bot) return;
  
  if (message.channel.name == `channel-name`) {

chat.reply('hello').then(message => {
    message.channel.send(message.response) // hello how are you
})
});
client.login('super secret bot token');
```
