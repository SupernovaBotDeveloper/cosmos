module.exports = [{
    name: "remind",
    aliases: "rem",
    code: `

$sendMessage[{newEmbed:{title:Reminder Added}{description:> $messageSlice[1]

I will remind you in $get[time]}{color:Green}}]

$setTimeout[remi;$get[time];{"link": "https://discord.com/channels/$guildID/$channelID/$messageID", "time": "$get[curr]", "msg": "$messageSlice[1]", "author": "$authorID"};false]

$let[curr;$djsEval[Math.floor(Date.now()/1000);true]]
$let[time;$message[1]]
$let[msg;$messageSlice[1]]

$onlyIf[$parseTime[$message[1]]<=1814400000;{newEmbed:{description:The maximum time limit is 21 days!}{color:Red}}]
$onlyIf[$parseTime[$message[1]]!=-1;{newEmbed:{description:Enter a valid time with format like \`1m/1d/1h\`}{color:Red}}]
$onlyIf[$isUserDmEnabled[$authorID]==true;{newEmbed:{description:Your DM is closed, please open it.}{color:Red}}]
$onlyIf[$message[2]!=;{newEmbed:{description:Enter a valid message to remind you.}{color:Red}}]
$onlyIf[$message[1]!=;{newEmbed:{description:Enter a valid time.}{color:Red}}]
`
}, {
    name: "remi",
    type: "timeout",
    code: `

$sendDM[{newEmbed:{title:Your Reminder!}{timestamp}{description:> $timeoutData[msg]\n\nCreated <t:$timeoutData[time]:R>}{color:Blue}}{actionRow:{button:Link:link:$timeoutData[link]:false}};$timeoutData[author]]

`
}]