// Bot by DanB
// require("dotenv").config()

import {config} from 'dotenv';
config()

import Discord from 'discord.js';
// const Discord = require("discord.js")

const client = new Discord.Client({
  partials: ['MESSAGE']
})

const BOT_PREFIX = '!'
const MOD_ME_COMMAND = 'mod-me'

// When bot is ready and logged in
client.on('ready', () => {
  console.log('Bot ready...')
})

client.on('messageDelete', msg => {
  msg.channel.send('Message has been deleted')
})

// When any message is sent read it
client.on('message', msg => {
  if (msg.content == 'love') {
    msg.react("❤️")
  }
  if (msg.content == 'hate') {
    msg.react("😡")
  }

  if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    modUser(msg.member)
  }
})

function modUser(member) {
  member.roles.add('791266183705001995')
}

client.login(process.env.BOT_TOKEN)
/*
Code server
Rolls
Bot of all bots 791265755508506624
Script Kiddie 763865199539126332
Moderator 791266183705001995
*/

