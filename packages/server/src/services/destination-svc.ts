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

function create(json: Destination): Promise<Destination> {
  const t = new DestinationModel(json);
  return t.save();
}

function update(
  locationid: String,
  destination: Destination
): Promise<Destination> {
  return DestinationModel.findOneAndUpdate({ locationid }, destination, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${locationid} not updated`;
    else return updated as Destination;
  });
}

function remove(locationid: String): Promise<void> {
  return DestinationModel.findOneAndDelete({ locationid }).then(
    (deleted) => {
      if (!deleted) throw `${locationid} not deleted`;
    }
  );
}

export default { index, get, create, update, remove };