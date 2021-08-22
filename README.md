<div align="center">
  <h1>Bananonz-Wrapper</h1>
  <p>
    <a href="https://www.npmjs.com/package/bananonz-wrapper"><img src="https://img.shields.io/npm/v/bananonz-wrapper?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/bananonz-wrapper"><img src="https://img.shields.io/npm/dt/bananonz-wrapper?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/bananonz-wrapper"><img src="https://nodei.co/npm/bananonz-wrapper.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
</div>

## Installation

```bash
npm install --save bananonz-wrapper
```

# Chat Bot

```js
const bananonz = require("bananonz-wrapper");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", async message => {
  const chatbot = await bananonz.chatbot(message.content, "Bananonz / Bot owner", "Bot / Bot name")
  message.channel.send(chatbot)
})
```

# Drake Meme Generator
```js
client.on("message", async message => {
if (message.content.toLowerCase() === "!drake") {
  const drake = await bananonz.drake("Bad", "Good")
  const img = new Discord.MessageAttachment(drake, "drake.png")
  message.channel.send(img)
}
})

```

# PetPet Gif Generator
```js
client.on("message", async message => {
if (message.content.toLowerCase() === "!pet") {
  let avatar = await message.author
  const petpet = await bananonz.pet()
  const img = new Discord.MessageAttachment(petpet, "drake.png")
  message.channel.send(img)
}
})

```

# Password Generator 
```js
client.on("message", async message => {
if (message.content.toLowerCase() === "!password") {
  const password = await bananonz.password()
  message.channel.send(password))
}
})

```