// src/index.ts
import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
import Destinations from "./services/destination-svc"; 

connect("scenic");

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.static(staticDir));

app.get("/destinations", async (req: Request, res: Response) => {
  try {
    const destinationsList = await Destinations.index();
    res.json(destinationsList); // Respond with the destinations as JSON
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch destinations" });
  }
});

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});