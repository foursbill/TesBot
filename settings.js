const fs = require('fs')
const chalk = require('chalk')

global.socialm = "IG: @jamer.1140"
global.location = "Japan"

global.botname = 'xCez'
global.ownernumber = '6285748600473' 
global.ownername = '© Jamerski'
global.websitex = "https://exonity.tech"
global.themeemoji = '🪀'
global.wm = "Jamerski1140"
global.packname = "Made With"
global.author = "❤️"
global.creator = "6285748600473@s.whatsapp.net"
global.xprefix = '.',''
global.premium = ["6285748600473"]
global.hituet = 0

global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '' 
global.antiforeignnumber = '' 
global.welcome = false 
global.anticall = true 
global.autoswview = false 
global.adminevent = false 
global.groupevent = false 
global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}

global.thumb = fs.readFileSync('./kurodenshi/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})