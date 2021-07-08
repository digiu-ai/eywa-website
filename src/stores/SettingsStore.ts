import { RootStore } from "@stores";
import { action, computed, observable } from "mobx";

export default class SettingsStore {
  public rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    if (this.rootStore.routerStore.searchParams.get("lang") === "ru") {
      this.selectedLanguage = "ru";
    }
  }

  @observable
  selectedLanguage: "en" | "ru" = "en";

  @computed
  get selectedLanguageLong() {
    return {
      en: "English(EN)",
      ru: "Russian(RU)",
    }[this.selectedLanguage];
  }

  @action
  toggleLanguage() {
    this.selectedLanguage = this.selectedLanguage === "en" ? "ru" : "en";
  }
}
