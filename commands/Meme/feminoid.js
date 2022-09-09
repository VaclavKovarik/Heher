const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "feminoid",
    category: "Meme",
    aliases: [""],
    cooldown: 1,
    usage: "feminoid",
    description: "Opinion rejected",
    run: async (client, message, args, user, text, prefix) => {
    try{
        message.channel.send("https://youtu.be/wIFXe-usVO8");
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
