import express from "express";
import cors from "cors";
import { PORT, PERSISTENCE } from "./config/constants.js";
import rankingRouter from "./routers/ranking.router.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ranking", rankingRouter);

app.listen(PORT, () => {
  console.log(`Ranking server is running on port ${PORT}`);
});

if(PERSISTENCE === "mongo") {
  import("./db/dao/mongo/connection.js");
} else {
  console.log("Using memory database");
}
