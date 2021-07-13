import { RequestHandler } from "express";
import { Item } from "../models/Item";

export const getAllItems: RequestHandler<null> = async (req, res, next) => {
  throw new Error("Not implemented");
  // const items = await Item.find({}).exec();
  // res.send(items);
};
export const getItemById: RequestHandler = async (req, res, next) => {
  const item = await Item.findById(req.params.id);
  res.send(item);
};

export const createItem: RequestHandler = async (req, res, next) => {
  const item = await Item.create(req.body);
  res.send(item);
};
export const updateItem: RequestHandler = async (req, res, next) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body);
  res.send(item);
};
export const deleteItem: RequestHandler = async (req, res, next) => {
  await Item.findByIdAndDelete(req.params.id);
  res.send("OK");
};
