import Router from "./routes/routes.js";
import express from "express";
import authRouter from "./routes/auth.js";
import db from "./config/dataBase.js";
import cors from "cors"

const app = express();
app.use(express.json())

app.use(cors());

try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (err) {
  console.error('Unable to connect to the database:');
}

app.use(Router);
app.use(authRouter);
app.listen(4000, () => {
console.log('this seems like logic but it is magic on port:4000')
})

