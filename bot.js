require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", (msg) => {
  if (msg.content === "Ping") {
    msg.reply("Pong");
    // msg.channel.send("Pong");
  }
});

client.on("messageDelete", (msg) => {
  msg.reply("Stop deleting messages");
});

client.on("message", (msg) => {
  if (msg.content === "!mod-me") {
    msg.member.roles.add("784029444561567744");
    msg.reply("You have been assigned as a 'moderator' role");
  }

  if (msg.content === "This works great") {
    msg.react("💖");
  }
});

client.login(process.env.BOT_TOKEN);
