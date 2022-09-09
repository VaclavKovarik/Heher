const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "chad",
    category: "Gay",
    aliases: [""],
    cooldown: 1,
    usage: "chad",
    description: "GigaChad",
    run: async (client, message, args, user, text, prefix) => {
    try{
        var textArray = [
            'https://c.tenor.com/TLhWkKdr770AAAAM/giga-chad.gif',
            'https://c.tenor.com/42JEbK9APFEAAAAM/giga-chad.gif',
            'https://c.tenor.com/jHvyFefhKmcAAAAM/mujikcboro-seriymujik.gif',
            'https://c.tenor.com/qOI3iBvktYcAAAAd/giga-chad.gif',
            'https://pbs.twimg.com/ext_tw_video_thumb/1492735195241652227/pu/img/j4KTHHOW1FNOXGC2.jpg',
            'https://i.pinimg.com/736x/5b/40/22/5b4022c77e071c1ad7a2119ece4e9c05.jpg',
            'https://i.kym-cdn.com/photos/images/original/002/315/028/a2a.png',
            'https://i.kym-cdn.com/photos/images/newsfeed/002/382/633/9c9.jpg',
            'https://i.kym-cdn.com/photos/images/newsfeed/002/314/986/8f1.png',
            'https://i.kym-cdn.com/photos/images/newsfeed/002/301/460/cfb.jpg'
        ];
        var randomNumber = Math.floor(Math.random()*textArray.length);
        message.channel.send(textArray[randomNumber]);
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}
