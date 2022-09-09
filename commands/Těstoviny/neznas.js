const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "neznáš",
    category: "Těstoviny",
    aliases: [""],
    cooldown: 1,
    usage: "neznáš",
    description: "Cringe retard",
    run: async (client, message, args, user, text, prefix) => {
    try{
        message.channel.send("to neznáš? jak to můžeš neznat? tak ty seš snad úplně retardovanej, to si kurva děláš prdel, že neznáš tenhle klenot, který ve skutečnosti až tak známý není. já už to znám od tý doby, co jsem vylezl z píče mojí mámy a ty mi prostě řekneš, že tohle neznáš. tak co si kurva celou tu dobu dělal ty čůráku? to fakt mi chceš říct, že si měl hlavu zastrčenou ve svojí prdeli a vůbec si z ní nevylejzal? to seš kurva němej a slepej, že to můžeš neznat? tak to jdi fakt do prdele, jestli mi chceš říct, že ze mě jen neděláš čůráka ty zkurvysynu a o tomhle jsi neslyšel ani okrajově v posraným Az-Kvízu. hele víš co, už drž hubu a vůbec na mě nemluv, protože takovýho degeneráta jako ty jsem ještě neviděl.");
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
