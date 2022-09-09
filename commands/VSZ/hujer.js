const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "hujer",
    category: "VSZ",
    aliases: [""],
    cooldown: 1,
    usage: "hujer",
    description: "Duchys jde pozdě",
    run: async (client, message, args, user, text, prefix) => {
    try{
        message.channel.send("https://media.discordapp.net/attachments/427888489867247626/814567178623647744/unnamed.png");
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
