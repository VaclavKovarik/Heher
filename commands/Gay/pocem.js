const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "pocem",
    category: "Gay",
    aliases: [""],
    cooldown: 1,
    usage: "pocem",
    description: "Pocem",
    run: async (client, message, args, user, text, prefix) => {
    try{
        message.channel.send("https://c.tenor.com/BSYeNq2POsQAAAAM/gachimuchi.gif");
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