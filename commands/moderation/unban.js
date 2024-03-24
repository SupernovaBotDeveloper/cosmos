module.exports = ({
    name: "unban",
    code: `
    $description[**<@$message[1]> was unbanned by <@$authorID>!**]
    $color[Red]
    $unban[$guildID;$message[1];]
    $argsCheck[>0;**Please give userID of someone to unban**]
    $onlyPerms[banmembers;**You don't have permission to unban**]
    $onlyClientPerms[banmembers;**I don't have Permission to unban**]
    $suppressErrors[**An Error Occured!**]
    `
})