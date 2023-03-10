import express from "express";
import cors from "cors";
import * as config from './config.js'
import { startDb } from "./data/db.js";
import routes from "../src/routes/index.js"
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.use((err, req, res, next) => {
if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
  res.status(400).json({error: "Invalid JSON"});
}
next();
});

app.get("/api/health", (req, res) => {
  res.json("This is working").status(200);
});

const startHttp = (port) => {
  const setupServer = (resolve, reject) => {
    if(!port) reject("Port is missing");

    const server = app.listen(port)
    server.once("listening", () => resolve(`Server running on port ${port}`))
    server.once("error", (err) => reject(`Server failed to start: ${err}`))
  }

  return new Promise(setupServer)
}

const main = async (port, mongoUri) => {
  try {
    const res = await Promise.all([startHttp(port), startDb(mongoUri)])
    res.forEach(msg => console.log(msg))
  } catch (err) {
    console.error("Failed to start application")
    console.error(err)
  }
}

main(config.PORT, config.MONGO_URI);