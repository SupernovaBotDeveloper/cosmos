module.exports = ({
    name: "help",
    code: `
    $title[Help]
    $description[**Hello $username!**
    **These are the Available commands for now!:-**

    **🛠️Moderation**
    \`ban,createmuterole,kick,mute,nuke,purge,setmuterole,setprefix,unban,warn\`
    
    **⚙️General**
    \`afk,avatar,botinfo,help,ping,poll,remind,serverinfo\`

    **💵Economy**
    \`balance,beg,daily,dep,lb,with,work\`

    **🎵Music**
    \`leavevc,loop,pause,play,queue,resume,setvolume,volume,stop\`
    ]
    $footer[Cosmos v1.0.0]
    $color[Random]
    $suppressErrors[**An Error Occured!**]
`
    })