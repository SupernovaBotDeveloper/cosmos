module.exports = [{
    name: "botinfo",
    code: `
$addField[Uptime;$uptime[full]]
$addField[Ping;$pingms]
$addField[Channels;$allChannelsCount]
$addField[Users;$allMembersCount]
$addField[Servers;$guildCount]
$title[Bot Information]
$color[#52A7E0]
  `
}]; 