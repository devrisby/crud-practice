import express from "express";
import cors from "cors";
import routes from "./routes/api/movie.js";
import db from "./database.js";

db.connect();
const app = express();
app.use(express.json());
app.use(routes);
app.use(cors());

const PORT = 3001;
app.use((err, req, res, next) => {
if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
  res.status(400).json({error: "Invalid JSON"});
}
next();
});

app.get("/api/health", (req, res) => {
  res.json("This is working").status(200);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


