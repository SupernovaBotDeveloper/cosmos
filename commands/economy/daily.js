module.exports = ({
    name: "daily",
    description: "Claim your daily money!",
    usage: "",
    category: "economy",
    code: `
    $title[Daily Money]
    $thumbnail[$userAvatar[$authorID]]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[100;5000]]]
$color[Random]
$description[You claimed your daily and got $customEmoji[cosmiccoin;970674100982906931]$random[100;5000]!]
$cooldown[1d;You can claim your next daily money in **%time%**!]`
})