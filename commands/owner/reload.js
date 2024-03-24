module.exports = [{
    name: "reload",
    aliases: ["update", "refresh"],
    description: "This command can be execute by developers only.",
    usage: "???",
    code: `
    $log[Loaded $commandsCount Commands.]
    $title[1;Reloaded Commands]
    $description[1;Reloaded $commandsCount commands]
    $color[1;Blue]
    $updateCommands
    $deletecommand
    $onlyForIDs[$clientOwnerIDs[;];]`
    }]