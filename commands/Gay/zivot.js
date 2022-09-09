const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "zivot",
    category: "Gay",
    aliases: [""],
    cooldown: 1,
    usage: "zivot",
    description: "Billy",
    run: async (client, message, args, user, text, prefix) => {
    try{
        message.channel.send("https://c.tenor.com/BSnn_D2LLbsAAAAd/billy-herrington-billy-herrington-drinks-beer.gif");
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
