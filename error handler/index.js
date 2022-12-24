const express = require('express')
const Logger = require('./Logger')
const getCurrentLine = require("get-current-line").default;
const app = express()

const logger = new Logger(__filename)

logger.info("Hello", getCurrentLine().line)
logger.success("Success",getCurrentLine().line)
logger.error("This an error", getCurrentLine().line)
logger.warning("This a warning",getCurrentLine().line)

app.listen(3005, () => console.log("Listening..."))