// src/services/destination-svc.ts
import { Schema, model } from "mongoose";
import { Destination } from "../models/destination";

const DestinationSchema = new Schema<Destination>(
  {
    _id: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    imageURL: { type: String, required: true, trim: true },  
  },
  { collection: "popular_locations" }
);

const DestinationModel = model<Destination>(
  "Destination",
  DestinationSchema
);

function index(): Promise<Destination[]> {
  return DestinationModel.find();
}

function get(id: String): Promise<Destination> {

  return DestinationModel.findById( id )
    .then((dest) => {
      if (!dest) throw `${id} Not Found`; 
      return dest
  })
};

export default { index, get };