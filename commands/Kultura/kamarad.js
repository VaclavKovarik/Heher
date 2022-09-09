const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "kamarad",
    category: "Kultura",
    aliases: [""],
    cooldown: 1,
    usage: "kamarad",
    description: "Kamarád",
    run: async (client, message, args, user, text, prefix) => {
    try{
        message.channel.send("https://pbs.twimg.com/profile_images/1196372674202755072/bZj3yeQk_400x400.jpg");
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
