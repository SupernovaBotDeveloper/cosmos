module.exports = [{
name: "setprefix",
aliases: ["changeprefix", "prefix"],
description: "This command can be changing to a different prefix for this server, this command require 'Manage Server' permission to be execute",
usage: "setprefix <newprefix>",
code: `$author[1;New Prefix;$userAvatar[$clientID]]
$description[1;New prefix has been set to \`\`$message[1]\`\`]
$color[1;Green]
$setGuildVar[prefix;$message]
$argsCheck[1;{newEmbed: {title:Invalid Arguments}{description:$getGuildVar[prefix]setprefix <newprefix>}{color:Red}}]
$onlyPerms[manageguild;{newEmbed:{title:Missing Permission}{description:This command user are required to have "Manage Guild" permission to be execute.}{color:Red}}]`
}]