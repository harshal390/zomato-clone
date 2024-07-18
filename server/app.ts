import express, { Request, Response } from "express";
import dotenv from "dotenv";

// configures dotenv to work in your application
dotenv.config();
const app = express();

const port = process.env.PORT;

app.get("/", (request: Request, response: Response) => {
  response.status(200).send(`Zomato Backend 🎉`);
});

app
  .listen(port, () => {
    console.log(`Zomato Backend listening on http://localhost:${port} 🎉`);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
