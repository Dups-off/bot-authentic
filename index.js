const Discord = require('discord.js');
const fs = require('fs');
const { token, prefix } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Bot opérationnel !');
  });

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply("Une erreur s'est produite pendant l'exécution de la commande !");
    }
});

// Message bienvenue Salon Bienvenu
client.on('guildMemberAdd', member => {
    console.log('Un nouveau membre est arrivé')
    member.guild.channels.cache.find(channel => channel.id === "644956327151534093").send('Bonjour **'+ member.displayName + '**, bienvenu sur le discord **Authentic**.\nNous sommes désormais **' + member.guild.memberCount + '** sur le server !')
});

// Message départ d'un membre
client.on('guildMemberRemove', member => {
    console.log('Un membre nous a quitté')
    member.guild.channels.cache.find(channel => channel.id === "644956327151534093").send('**' + member.displayName +'** nous a quitté... 😢');
})

client.login(process.env.TOKEN);