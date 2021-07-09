import axios from "axios";
import { loadEnvVar } from "@src/utils";

export interface IRawLocalization {
  identifer: string
  ru: string
  en: string
}

export type TLocalization = Record<string, { en: string, ru: string }>

const localizationsArrayToObject = (data: IRawLocalization[]) => data.reduce((acc, { identifer, ru, en }) =>
  ({ [`${identifer}`]: { ru, en }, ...acc }), {} as TLocalization);

export default {
  async localizations(): Promise<TLocalization> {
    const { data } = await axios.get(`${loadEnvVar("STRAPI_URL")}/localizations`);
    return localizationsArrayToObject(data);
    // return localizationsArrayToObject(data);
  }
};
