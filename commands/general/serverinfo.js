module.exports = [{
    name: "serverinfo",
      code: `
$addField[Channels;Total: $channelCount[$guildID]
Text: $channelCount[$guildID;Text]
Voice: $channelCount[$guildID;Voice]
Category: $channelCount[$guildID;Category]
News: $channelCount[$guildID;Announcement]
Threads: $channelCount[$guildID;PublicThread]]
$addField[Emojis;Total: $emojiCount[$guildID]]
$addField[Roles;$roleCount[$guildID;true]]
$addField[Members;Total: $membersCount[$guildID]
Online: $membersCount[$guildID;online;true]]
$addField[Boosts;$guildBoostCount[$guildID] (Level $guildBoostLevel[$guildID])]
$addField[Creation;$creationDate[$guildID;time]]
$addField[Guild ID;$guildID]
$addField[Owner;<@$guildOwnerID[$guildID]>]
$title[Server Information - $guildName[$guildID]]
$color[#52A7E0]
  `
}];