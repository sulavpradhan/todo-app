import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import router from "./routes/index.route.js";

const app = express();

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set view engine
app.set("view engine", "hbs");

// connect to DB
connectDB();

const PORT = Number(process.env.PORT || 3030);

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
