const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.once("ready", () => {
  console.log("BOT 起動完了");
});

client.on("guildMemberAdd", async member => {
  const role = member.guild.roles.cache.get("1467196041320333355");
  if (role) {
    await member.roles.add(role);
  }
});

client.login(process.env.TOKEN);
