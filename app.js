import express from "express";
import cors from "cors";

const app = express();

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

const PORT = Number(process.env.PORT || 3030);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
