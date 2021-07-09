import axios from "axios";
import { loadEnvVar } from "@src/utils";

export interface Localization {
  itemId: string
  text: string
  locale: string
}

// const localizationsArrayToObject = (data: Localization[]) => data.reduce((acc, e) => ({ [`${e.itemId}`]: { ...e }, ...acc }), {})

export default {
  async localizations(): Promise<Record<string, { en: string, ru: string }>> {
    const { data } = await axios.get(`${loadEnvVar("STRAPI_URL")}/localizations`);
    return data
    // return localizationsArrayToObject(data);
  }
};
