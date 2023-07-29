require("dotenv").config(); // Agrega al objeto "process" en la prop "env" nuestras variables
const { PORT, PASSWORD } = process.env;
const morgan = require("morgan");
const cors = require("cors");
// Routers
const characterRouter = require("./routes/character");
const userRouter = require("./routes/user");
const favoriteRouter = require("./routes/favorites");
// Express
const express = require("express");
const server = express();

// Middlewars
server.use(express.json()); // para poder recibir JSON por req.body
server.use(morgan("dev")); // Me muestra en consola como sale la REQ y la RES

// Permisos -> Cors
server.use(cors()); // Habilito las CORS para que cualquier origen pueda enviar solicitud a mi servidor

// Routers --> Que rutas voy a usar
server.use("/character", characterRouter);
server.use("/user", userRouter);
server.use("/favorites", favoriteRouter);

server.get("/health-check", (req, res) => {
  res.send("Working");
});

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});
