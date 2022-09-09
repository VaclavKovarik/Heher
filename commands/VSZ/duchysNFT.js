const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "nft",
    category: "VSZ",
    aliases: [""],
    cooldown: 1,
    usage: "nft",
    description: "Rare NFT",
    run: async (client, message, args, user, text, prefix) => {
    try{
        var textArray = [
            'https://media.discordapp.net/attachments/638704859570503705/923870162359316480/unknown.png',
            'https://cdn.discordapp.com/attachments/744600238999994398/1001025396285911091/unknown.png'
        ];
        var randomNumber = Math.floor(Math.random()*textArray.length);
        message.channel.send(textArray[randomNumber]);
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
