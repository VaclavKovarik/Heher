const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "argument",
    category: "VSZ",
    aliases: [""],
    cooldown: 1,
    usage: "argument",
    description: "Argumenty",
    run: async (client, message, args, user, text, prefix) => {
    try{
        message.channel.send("https://media.discordapp.net/attachments/424521546372218882/922597493747908618/unknown.png");
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
