const { Client } = require('discord.js');
const bot = new Client;

const serverID = '754358974320607272';
const generalChannelID = '754709353109389395';
const prefix = '!';

const token = '';

const badWords = ['fuck', 'fck', 'fick', 'bitch', 'btch', 'cunt']

bot.on('message', msg => {
    for (var i in badWords){ //Check message for bad words
        if (msg.content.toLowerCase().match(badWords[i])) {
            msg.channel.send("Woah, hey man! Watch the language, we're all friends here.")
            break;
        }
    }
    if (msg.member.id !== '754356717101252668'){
        if (msg.content.toLowerCase().match('nigga') || msg.content.toLowerCase().match('nigger')
            || msg.content.toLowerCase().match('niqqa')) {
            msg.channel.send("Who you calling a nigga? That's not cool")
        } else if (msg.content.toLowerCase().match("where do you live") 
            || msg.content.toLowerCase().match("where do u live")) {
                msg.channel.send("You know, man! The USA :flag_us:")
        } else if (msg.content.toLowerCase().match('arif') && (msg.content.toLowerCase().match('hello') || msg.content.toLowerCase().match('hey') 
            || msg.content.toLowerCase().match('what\'s up') || msg.content.toLowerCase().match('whats up'))) {
            msg.channel.send('What\'s up, man?')
        } else if (msg.content.toLowerCase().match('how are you')) {
            msg.channel.send('I\'m good, homie. How are you?')
        } else if (msg.content.toLowerCase().match('fortnite')) {
            msg.channel.send('Fortnite? Lassh go! :video_game:')
        } else if (msg.content.toLowerCase().match('aye')) {
            msg.reply("b?")
        } else if (msg.content.toLowerCase().match('america') || msg.content.toLowerCase().match('usa')
            || msg.content.toLowerCase().match('us')) {
                msg.channel.send(":flag_us: USA #1 :flag_us:")
        } else if (msg.content.toLowerCase().match('sorry')){
            msg.channel.send("Apology accepted. We cool man")
        } else if (msg.content.toLowerCase().match('whoop whoop')) {
            msg.reply("That's the sound of the police")
        }  else if (msg.content.toLowerCase().match('calm down') && msg.content.toLowerCase().match('arif')) {
            msg.channel.send('Imma stab someone in a minute')
        } else if (msg.content.toLowerCase().match("who do you love")) {
            msg.channel.send("I love Sam.")
        } else if (msg.content.toLowerCase().match('arif')) {
            msg.channel.send("Did someone say my name?")
        }
    }
});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
    if (!channel) return;
    channel.send(`What\'s up , <@${member.id}>? Welcome to the server. Keen for some Fortnite?`);
});

bot.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
    if (!channel) return;
    channel.send('It\'s a good thing they left. I was about to lose my shit.');
})

bot.on("presenceUpdate", (oldPresence, newPresence) => {
    if (oldPresence && newPresence) {
        if (oldPresence.status === 'offline' && newPresence.status === 'online') {
            bot.channels.fetch(generalChannelID)
                .then(channel => channel.send(`Hey <@${oldPresence.user.id}>, you're finally online. Are you ready to play some fortnite? :video_game:`))
                .catch(console.error);
        } else if (oldPresence.status === 'idle' && newPresence.status === 'online') {
            bot.channels.fetch(generalChannelID)
                .then(channel => channel.send(`Hey, <@${oldPresence.user.id}>, welcome back`))
                .catch(console.error);
        }
    }
});

bot.on('ready', () => {
    bot.channels.fetch(generalChannelID)
        .then(channel => channel.send("Beep boop! Arifbot is online. What's up, guys?"))
        .catch(console.error);
});


bot.login(token);