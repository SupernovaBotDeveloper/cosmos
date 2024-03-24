module.exports = ({
    name: "work",
    code: `
   $title[Work]
   $description[You $randomText[helped your Grandmother in making sweets;launched a rocket to mars;sold your pet dog;cooked food for your family;help crewmates to eject the imposter;mined at Lunar Surface;literally did nothing] and got $customEmoji[cosmiccoin;970674100982906931]$random[500;1000]]
   $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[500;1000]]]
   $color[Random]
   $cooldown[30s;You can use this command again in **%time%**]`
   })