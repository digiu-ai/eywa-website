import mongoose, { Document } from "mongoose";

export interface ILocalisation {
  name: string;
  description?: string;
  isFragile: boolean;
  price: number;
}

export type LocalizationDocument = Document & ILocalisation;

const LocalizationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  isFragile: { type: Boolean, required: true, default: false },
  price: { type: Number, required: true },
});

export const Localization = mongoose.model<LocalizationDocument>(
  "Localization",
  LocalizationSchema
);
