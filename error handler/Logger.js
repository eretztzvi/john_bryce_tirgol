const colors = require("colors");
const fs = require("fs");

colors.setTheme({
  info: "cyan",
  warning: "yellow",
  error: "red",
  success: "green",
});

class Logger {
  static fileName;
  static currentTime;

  constructor(file) {
    this.fileName = this.getFileName(file);
    this.currentTime = this.getCurrentTime();
  }

  info(info = "", line) {
    this.generateLog(info, line, "info");
  }
  success(success = "", line) {
    this.generateLog(success, line, "success");
  }
  error(error = "", line) {
    this.generateLog(error, line, "error");
  }
  warning(warning = "", line) {
    this.generateLog(warning, line, "warning");
  }

  // handlers
  getFileName(root) {
    const array = root.split("\\");
    return array[array.length - 1];
  }
  getCurrentTime() {
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    return `${date} ${time}`;
  }

  async generateLog(log = "", line = "", type = "info") {
    const generateLogForConsole = `[${this.fileName.underline}:${line}] [${
      this.currentTime
    }] [${type.toUpperCase().underline}] ${log}`[type];

    console.log(generateLogForConsole);

    const generateLogForFile = `[${this.fileName}:${line}] [${
      this.currentTime
    }] [${type.toUpperCase()}] ${log}`;

    const logsFolder = `./logs/`;

    await fs.mkdir(logsFolder, { recursive: true }, (exist) => {
      if (exist) {
        console.log("exist....");
        fs.appendFile(
          `./logs/${new Date().toLocaleDateString().split("/").join("-")}.txt`,
          `${generateLogForFile} \n`
        );
      } else {
        fs.writeFile(
          `./logs/${new Date().toLocaleDateString().split("/").join("-")}.txt`,
          `${generateLogForFile} \n`
        );
      }
    });
  }
}

module.exports = Logger;
