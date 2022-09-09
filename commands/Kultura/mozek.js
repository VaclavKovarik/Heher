const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "mozek",
    category: "Kultura",
    aliases: [""],
    cooldown: 1,
    usage: "mozek",
    description: "Zapoj mozek",
    run: async (client, message, args, user, text, prefix) => {
    try{
        message.channel.send("https://images-ext-1.discordapp.net/external/8TsTlgDEocZD4aSiogJIwEM-vxiwtYUgqTINkOcnaMM/https/media.tenor.com/a1YQc_iOWcwAAAPo/zapoj-mozek-debile-wtf.mp4");
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
