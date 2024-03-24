module.exports=({
    name: "$alwaysExecute",
    code: `$channelSendMessage[$channelID;**Error! This Command does not exist**]
   $onlyIf[$commandinfo[$replaceText[$message[1];$getGuildVar[prefix];];name]==;]
   $onlyIf[$stringStartsWith[$message;$getGuildVar[prefix]]!=false;]`
   })