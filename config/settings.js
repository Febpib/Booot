const fs = require("fs");
const chalk = require("chalk");
// EDIT DISINI
global.owner = ["6283820352529""6283838887677"]; // no own
global.packname = "© sticker by FIKO'XD"; // nama pack sticker
global.author = "FikoXdStore"; // nama author
global.pic = "https://i.postimg.cc/bYsWpp4D/20230517-115351.jpg"; // url foto

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`));
  delete require.cache[file];
  require(file);
});
