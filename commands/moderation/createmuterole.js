module.exports = [{
    name: "createmute",
    aliases: "createmuterole",
    description: "This command will create a mute role themself if a server doesn't have one, this command require 'Manage Roles' permission to be execute.",
    usage: ".createmute",
    code: `$title[1;Mute Role Created]
    $description[1;Mute role <@&$get[roleID]> have been created!]
    $color[1;Green]
    $modifyRolePerms[$guildID;$get[roleID];-sendmessages]
    $let[roleID;$createRole[$guildID;Muted;808080;1;;false;;false;true]]
    $onlyClientPerms[manageroles;{newEmbed:{title:Missing Permission}{description:In this command I'm require to have "Manage Roles" permission to do that.}{color:Red}}]
    $onlyPerms[manageroles;{newEmbed:{title:Missing Permission}{description:This command user are required to have "Manage Roles" permission to be execute.}{color:Red}}]
    `
    }]