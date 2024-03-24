module.exports = ({
    name: "beg",
    description: "Beg for money!",
    usage: "",
    category: "Economy",
    code: `$color[Random]
    $description[You begged from $randomText[An alien from mars;Your rich astronaut friend;Elon himself;A scientist;God!;A crewmate in ISS;Yourself??] and got **$customEmoji[cosmiccoin;970674100982906931]$random[10;500]**!]
    $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[10;500]]]
    $cooldown[25s;Don't beg so much... Do it again in **%time%!**]`    
})