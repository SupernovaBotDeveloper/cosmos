module.exports = [{
    name: "muterole",
    aliases: ["setmute", "setmuterole"],
    description: "This command allows moderators to set their own mute role if they have one, this command require 'Manage Roles' permission to be execute.",
    usage: ".muterole <roleid>",
    code: `$title[1;Mute Role Set]
    $description[1;I have set the mute role to <@&$message[1]>]
    $color[1;Green]
    $setGuildVar[muterole;$message[1]]
    $onlyIf[$roleExists[$message[1];$guildID]!=false;{newEmbed: {title:Role Not Found}{description:Please provide with a valid role ID.}{color:Red}}]
    $argsCheck[1;{newEmbed: {title:Invalid Arguments}{description:$getGuildVar[prefix]muterole <roleID>}{color:Red}}]
    $onlyClientPerms[manageroles;{newEmbed:{title:Missing Permission}{description:In this command I'm require to have "Manage Roles" permission to do that.}{color:Red}}]
    $onlyPerms[manageroles;{newEmbed:{title:Missing Permission}{description:This command user are required to have "Manage Roles" permission to be execute.}{color:Red}}]`
    }]