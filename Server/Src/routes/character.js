const express = require("express")
const { getCharById } = require("../controllers/getCharById")

const characterRouter = express.Router()

characterRouter.get("/:idChar", getCharById)

module.exports = characterRouter;