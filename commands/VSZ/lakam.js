const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "lakam",
    category: "VSZ",
    aliases: [""],
    cooldown: 1,
    usage: "lakam",
    description: "Cringe retard",
    run: async (client, message, args, user, text, prefix) => {
    try{
        message.channel.send("https://images-ext-1.discordapp.net/external/XFW_SVMg9R1u2gD9NlKuo59jJgz-Sf8m5BiHSqdHE2c/https/c.tenor.com/Hipi6wGslLkAAAAM/out-disappear.gif");
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
