const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "rada",
    category: "Gay",
    aliases: [""],
    cooldown: 1,
    usage: "rada",
    description: "Rádci",
    run: async (client, message, args, user, text, prefix) => {
    try{
        var textArray = [
            'https://i.kym-cdn.com/photos/images/newsfeed/001/562/654/1fd.jpg',
            'https://i.kym-cdn.com/photos/images/newsfeed/001/562/655/8fa.jpg',
            'https://i.kym-cdn.com/photos/images/newsfeed/001/562/650/cd0.jpg',
            'https://i.kym-cdn.com/photos/images/newsfeed/001/548/116/85d.jpg'
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
