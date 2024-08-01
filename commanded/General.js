const { zokou } = require("../framework/zokou");

const {getAllSudoNumbers,isSudoTableNotEmpty} = require("../bdd/sudo")

const conf = require("../set");



zokou({ nomCom: "BLAQ_TV", categorie: "General", reaction: "💞" }, async (dest, zk, commandeOptions) => {

    const { ms , mybotpic } = commandeOptions;

    

  const thsudo = await isSudoTableNotEmpty()



  if (thsudo) {

     let msg = `*My Super-User*\nBLAQ_TV

     *Owner Number\n* :2348130505901

- 🌟 @${conf.2348130505901}



------ *other sudos* -----\n`

     

 let sudos = await getAllSudoNumbers()



   for ( const sudo of sudos) {

    if (sudo) { // Vérification plus stricte pour éliminer les valeurs vides ou indéfinies

      sudonumero = sudo.replace(/[^0-9]/g, '');

      msg += `- 💼 @${2348130505901}\n`;

    } else {return}



   }   const ownerjid = conf.BLAQ_TV.replace(/[^0-9]/g) + "@s.whatsapp.net";

   const mentionedJid = sudos.concat([ownerjid])

   console.log(sudos);

   console.log(mentionedJid)

      zk.sendMessage(

        dest,

        {

          image : { url : mybotpic() },

          caption : msg,

          mentions : mentionedJid

        }

      )

  } else {

    const vcard =

        'BEGIN:VCARD\n' + // metadata of the contact card

        'VERSION:3.0\n' +

        'FN:' + conf.BLAQ_TV + '\n' + // full name

        'ORG:undefined;\n' + // the organization of the contact

        'TEL;type=CELL;type=VOICE;waid=' + conf.BLAQ_TV + ':+' + conf.+2348130505901 + '\n' + // WhatsApp ID + phone number

        'END:VCARD';

    zk.sendMessage(dest, {

        contacts: {

            displayName: conf.BLAQ_TV,

            contacts: [{ vcard }],

        },

    },{quoted:ms});

  }

});



zokou({ nomCom: "dev", categorie: "General", reaction: "💞" }, async (dest, zk, commandeOptions) => {

    const { ms, mybotpic } = commandeOptions;



    const devs = [

      { nom: "BLAQ_TV", numero: "2348130505901" },
      // Ajoute d'autres développeurs ici avec leur nom et numéro

    ];



    let message = "Yowaimo!!!👋 welcome to *Queen_Emmie-MD* ! here is the dev :\n\n";

    for (const dev of devs) {

      message += `BLAQ_TV\n• ${dev.nom} : https://wa.me/+2348130505901`;

    }

  var lien = mybotpic()

    if (lien.match(/\.(mp4|gif)$/i)) {

    try {

        zk.sendMessage(dest, { video: { url: lien }, caption:message }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu erreur " + e);

        repondre("🥵🥵 Menu erreur " + e);

    }

} 

// Vérification pour .jpeg ou .png

else if (lien.match(/\.(jpeg|png|jpg)$/i)) {

    try {

        zk.sendMessage(dest, { image: { url: lien }, caption:message }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu erreur " + e);

        repondre("🥵🥵 Menu erreur " + e);

    }

} 

else {

    repondre(lien)

    repondre("link error");

    

}

});



zokou({ nomCom: "support", categorie: "General" }, async (dest, zk, commandeOptions) => {

  const { ms, repondre, auteurMessage, } = commandeOptions; 

 

  repondre("look on pm sir ")

  await zk.sendMessage(auteurMessage,{text : `https://whatsapp.com/channel/0029VakYQvY6LwHmMz8qwt0k`},{quoted :ms})



})



