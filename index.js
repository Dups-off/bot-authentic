const Discord = require("discord.js");

const { token, prefix } = reguire("./config.json");

const client = new Discord.Client();

client.on("ready", () => {
    console.log("Bot opérationnel !");
});

client.on("message", (message) => {
    if (message.content === `${prefix}ping`)
    message.channel.send("Pong !");

});

client.login(process.env.TOKEN);
