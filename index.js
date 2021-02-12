// inmportation librairie discord
const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchAllMembers: true,
        disableEveryone: true
    })
    config = require('./config.json')
    
// Chargement variable prefix et channelbienvenu
const {prefix, channelbienvenu} = require('./config.json')

// Connexion
client.login(config.process.env.TOKEN)
client.on('ready', () => {
    console.log('bot opérationnel')
})

// test Ping Pong
client.on('message', (message) => {
    if (message.content === `${prefix}ping`) {
        message.channel.send('Pong !')
    }
})

// Message bienvenue Salon Bienvenu
client.on('guildMemberAdd', member => {
    console.log('Un nouveau membre est arrivé')
    member.guild.channels.cache.find(channel => channel.id === "644956327151534093").send('Bonjour **'+ member.displayName + '**, bienvenu sur le discord **Authentic**.\nNous sommes désormais **' + member.guild.memberCount + '** sur le server !')
})

// Message départ d'un membre
client.on('guildMemberRemove', member => {
    console.log('Un membre nous a quitté')
    member.guild.channels.cache.find(channel => channel.id === "644956327151534093").send('**' + member.displayName +'** nous a quitté... 😢')
})

