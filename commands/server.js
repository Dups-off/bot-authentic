module.exports = {
    name: 'server',
    description: 'Serveur Informations',
    execute(message) {
        message.channel.send(`Nom du serveur : **${message.guild.name}**\nNombre d'utilisateurs : **${message.guild.memberCount}**`);
    }
};