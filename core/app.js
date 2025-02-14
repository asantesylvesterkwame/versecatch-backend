const { handleApplicationErrors, notFound } = require("./response");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const emailValidation = require("./emailCheck");
const routes = require("./routes");
const axios = "axios";

const app = express();

const application = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(helmet());
  app.use(compression());
  app.use(
    cors({
      origin: "https://versecatch-web-asante.onrender.com",
    })
  );
  app.use(emailValidation);

  app.get("/", (req, res) => {
    res.status(200).json({ message: "App working fine. Welcome" });
  });

  routes(app);

  app.use(handleApplicationErrors); //application errors handler
  app.use(notFound);
};

module.exports = { app, application };
