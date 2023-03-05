import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.get("/api/health", (req, res) => {
  res.json("This is working").status(200);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
