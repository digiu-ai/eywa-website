import { RequestHandler } from "express";
import { Lang } from "../models/Lang";
import xlsx from "node-xlsx";

export const getAllLangs: RequestHandler<null> = async (req, res, next) => {
  throw new Error("Not implemented");
  // const langs = await Lang.find({}).exec();
  // res.send(langs);
};
export const getLangById: RequestHandler = async (req, res, next) => {
  const lang = await Lang.findById(req.params.id);
  res.send(lang);
};

export const createLang: RequestHandler = async (req, res, next) => {
  const lang = await Lang.create(req.body);
  //fixme
  const workSheetsFromFile = xlsx.parse(`${__dirname}/table.xlsx`);
  console.log(workSheetsFromFile[0].data);
  res.send(lang);
};
export const updateLang: RequestHandler = async (req, res, next) => {
  const lang = await Lang.findByIdAndUpdate(req.params.id, req.body);
  res.send(lang);
};
export const deleteLang: RequestHandler = async (req, res, next) => {
  await Lang.findByIdAndDelete(req.params.id);
  res.send("OK");
};
