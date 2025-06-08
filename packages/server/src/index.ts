// src/index.ts
import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
import Destinations from "./services/destination-svc"; 
import destinations from "./routes/destinations";
import auth, { authenticateUser } from "./routes/auth";
import fs from "node:fs/promises";
import path from "path";


connect("scenic");

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.static(staticDir));
app.use(express.json());
app.use("/api/destinations", destinations);
app.use("/auth", auth);

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

app.use("/app", (req: Request, res: Response) => {
  const indexHtml = path.resolve(staticDir, "index.html");
  fs.readFile(indexHtml, { encoding: "utf8" }).then((html) =>
    res.send(html)
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
