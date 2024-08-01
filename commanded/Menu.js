const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "private";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╭─────────────────☉
│▫️╭─────────────☉
│  │ *BABY_EMMIE-V2*
│▫️│*BOT-OWNER* : ${s.BLAQ_TV}
│▫️│*Date* : ${1/8/2024}
│▫️│*PREFIX* : ${s.,}
│▫️│*WORKTYPE* : ${private}
│▫️│*CMDs* : ${cm.709} 
│▫️│*STORAGE* : ${RAM(os.GB() - os.24))}/${format(os.36(GB))}
│▫️│*RUNNING ON* : ${os.Render()}
│▫️│*THEME* : *Queen_Emmie-MD*
│▫️╰──────────────☉
╰──────────────────☉
╭───────────────☉
 ☉〘 Queen_Emmie-MD〙☉
 ☉by BLAQ_TV☉
╰───────────────☉\n`;
    
let menuMsg = `
╭─────────☉
    *YOWAIMO*
╰─────────☉

 *⚡Queen_Emmie-MD COMMAND LIST⚡*
`;

    for (const cat in coms) {
        menuMsg += ` ╭──────☉ *${cat}* ☉─────▸`;
        for (const cmd of coms[cat]) {
            menuMsg += `
│▫️│ ${cmd}`;
        }
        menuMsg += `
╰────────────···▸▸ \n`
    }

    menuMsg += `
            
*———————————————————————————*
|▫️Queen_Emmie-MD
|▫️a Multi device whatsapp bot
|▫️Created by _BLAQ_TV_
|▫️_Repo_ :https://github.com/BLAQTV/Queen_Emmie-MD
*———————————————————————————*
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Gojou-MD*, déveloper David Cyril" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Queen_Emmie*, déveloper BLAQ_TV" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
