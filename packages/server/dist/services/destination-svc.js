"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var destination_svc_exports = {};
__export(destination_svc_exports, {
  default: () => destination_svc_default
});
module.exports = __toCommonJS(destination_svc_exports);
var import_mongoose = require("mongoose");
const DestinationSchema = new import_mongoose.Schema(
  {
    _id: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    imageURL: { type: String, required: true, trim: true }
  },
  { collection: "popular_locations" }
);
const DestinationModel = (0, import_mongoose.model)(
  "Destination",
  DestinationSchema
);
function index() {
  return DestinationModel.find();
}
function get(id) {
  return DestinationModel.findById(id).then((dest) => {
    if (!dest) throw `${id} Not Found`;
    return dest;
  });
}
;
function create(json) {
  const t = new DestinationModel(json);
  return t.save();
}
function update(locationid, destination) {
  return DestinationModel.findOneAndUpdate({ locationid }, destination, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${locationid} not updated`;
    else return updated;
  });
}
function remove(locationid) {
  return DestinationModel.findOneAndDelete({ locationid }).then(
    (deleted) => {
      if (!deleted) throw `${locationid} not deleted`;
    }
  );
}
var destination_svc_default = { index, get, create, update, remove };
