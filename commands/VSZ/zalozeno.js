const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "založeno",
    category: "VSZ",
    aliases: [""],
    cooldown: 1,
    usage: "založeno",
    description: "Based?",
    run: async (client, message, args, user, text, prefix) => {
    try{
        message.channel.send("Založeno? Založeno na čem? Na tvojem kokotovi?Prosím zavři hubu a používej slova normálně, ty stupidní troglodyte, myslíš si, že nám Bůh dal svobodu slova, jen abychom říkali náhodná slova, které nemají s tématem konverzace nic společného? Vždycky se ptáš, proč se s tebou nikdo nebaví, nebo proč s tebou nikdo nesdílí jejich názory, protože říkáš náhodné sračky jako poggers, based, cringe a když se je snažíš vysvětlit tak jen řekneš, že jsou vtipné. Jako cože? Co si kurva myslíš, že je na tom vtipného, jako myslíš si, že se jen tak staneš stand-up komikem, který dostane bouřlivý potlesk, jen proto, že řekl cum na jevišti. ANI NÁHODOU IDIOTE. Takže prosím zavři hubu a používej slova, tak jak mají být používány debile.");
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
