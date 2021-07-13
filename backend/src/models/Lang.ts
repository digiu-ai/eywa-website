import mongoose, { Document } from "mongoose";

export interface ILang {
  language: "en" | "ru" | string;
  langMap: string[];
}

export type LangDocument = Document & ILang;

const LangSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: [String], required: true },
});

export const Lang = mongoose.model<LangDocument>("Lang", LangSchema);
