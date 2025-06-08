// src/routes/destinations.ts
import express, { Request, Response } from "express";
import { Destination } from "../models/destination";

import Destinations from "../services/destination-svc";

const router = express.Router();

router.get("/", (_, res: Response) => {
    Destinations.index()
      .then((list: Destination[]) => res.json(list))
      .catch((err) => res.status(500).send(err));
  });
  
  router.get("/:locationid", (req: Request, res: Response) => {
    const { userid } = req.params;
  
    Destinations.get(userid)
      .then((destination: Destination) => res.json(destination))
      .catch((err) => res.status(404).send(err));
  });

  router.post("/", (req: Request, res: Response) => {
  console.log("Received POST with body:", req.body); // Add this line
  const newDestination = req.body;

  Destinations.create(newDestination)
    .then((destination: Destination) => {
      console.log("Successfully created:", destination); // Add this line
      res.status(201).json(destination);
    })
    .catch((err) => {
      console.error("Error creating destination:", err); // Add this line
      res.status(500).send(err);
    });
});

  router.put("/:userid", (req: Request, res: Response) => {
    const { userid } = req.params;
    const newDestination = req.body;
  
    Destinations.update(userid, newDestination)
      .then((destination: Destination) => res.json(destination))
      .catch((err) => res.status(404).end());
  });

  router.delete("/:userid", (req: Request, res: Response) => {
    const { userid } = req.params;
  
    Destinations.remove(userid)
      .then(() => res.status(204).end())
      .catch((err) => res.status(404).send(err));
  });

  

  export default router;