module.exports = [{
    name: "afk",
    aliases: ["setafk"],
    $if: "old",
    code: `
    $setGlobalUserVar[time;<t:$truncate[$divide[$dateStamp;1000]]:R>]
    **You are now AFK.** (Reason: **$replaceText[$replaceText[$checkCondition[$message==];true;None];false;$message]**)
    $setGlobalUserVar[afk;true]
    $setGlobalUserVar[afkmsg;$replaceText[$replaceText[$checkCondition[$message==];true;None];false;$message]]
    
    `
    },{
        name: "$alwaysExecute",
        $if: "old",
        code: `
        **You're back from AFK**
    (Afk Time: $getGlobalUserVar[time])
        $reply
        $setGlobalUserVar[afk;false]
        $onlyIf[$getGlobalUserVar[afk]==true;]`
    },{
    name: "$alwaysExecute",
    $if: "old",
    code: `
    $username[$mentioned[1;false]] Is AFK $getGlobalUserVar[time;$mentioned[1]]!
    (Message: **$getGlobalUserVar[afkmsg;$mentioned[1;false]]**)
    $reply
    $onlyIf[$getGlobalUserVar[afk;$mentioned[1;false]]==true;]
    $onlyIf[$mentioned[1;false]!=undefined;]`
    }]