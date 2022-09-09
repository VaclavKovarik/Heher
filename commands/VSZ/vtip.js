const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "vtip",
    category: "VSZ",
    aliases: [""],
    cooldown: 1,
    usage: "vtip",
    description: "Cope",
    run: async (client, message, args, user, text, prefix) => {
    try{
        message.channel.send("https://media.discordapp.net/attachments/788180179151224832/814557256825176064/0af5fe31d25281fa2db0faaa1885dd7f.png");
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
