module.exports = ({
    name: "leaderboard",
    aliases: ['lb'],
    description: "Check the money leaderboard",
    usage: "",
    category: "economy",
    code: `$title[Money Leaderboard]
    $color[Random]
    $description[$globalUserLeaderBoard[Money;desc;{top} - {username} - {value};10;1;main]]
    $cooldown[5s;{description:A bit too fast there. Wait for **time%**!}{color:Random}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})