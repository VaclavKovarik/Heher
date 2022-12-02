const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "premlouvat",
    category: "VŠŽ",
    aliases: [""],
    cooldown: 1,
    usage: "premlouvat",
    description: "Nebudu přemlouvat",
    run: async (client, message, args, user, text, prefix) => {
    try{
        message.channel.send("https://media.discordapp.net/attachments/642753062032900096/1048242418455171202/image.png");
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
