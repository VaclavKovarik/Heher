const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "názor",
    category: "VSZ",
    aliases: [""],
    cooldown: 1,
    usage: "Názor",
    description: "Názory",
    run: async (client, message, args, user, text, prefix) => {
    try{
        message.channel.send("https://images-ext-1.discordapp.net/external/V-U8lEag69cKRibEPwVcY0EqA2w-71DT4bhDgUqdUSI/https/media.tenor.com/L_ZB5LOYlZ4AAAPo/stone-casting-throw.mp4");
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
