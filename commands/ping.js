module.exports = {
    name: 'ping',
    description: 'test Command',
    execute(message) {
        message.channel.send('Pong !');
    }
};