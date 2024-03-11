const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/G0RAGHE329OBUE0pfoeZNV";
global.website=process.env.GURL || "https://www.hamzanews.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "data:image/png;base64,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" ; // SET LOGO FOR IMAGE 



global.devs = "923417680053,923207614149" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923417680053,923207614149";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: HAMZA-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.9",
  caption : process.env.CAPTION || "©HAMZA-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ HAMZA-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • HAMZA ᴛᴇᴄʜ』*\n https://chat.whatsapp.com/G0RAGHE329OBUE0pfoeZNV"),
 
  author : process.env.PACK_AUTHER|| "HAMZA-MD",
  packname: process.env.PACK_NAME || "H♥️A",
  botname : process.env.BOT_NAME  || "HAMZA-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x HAMZA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "HAMZA",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
