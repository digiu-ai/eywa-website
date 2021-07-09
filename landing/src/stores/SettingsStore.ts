import { RootStore } from "@stores";
import { action, computed, observable } from "mobx";
import { TLocalization } from "@services/strapiService";

export default class SettingsStore {
  public rootStore: RootStore;
  localizations: TLocalization;

  constructor(rootStore: RootStore, initState: { localizations: TLocalization }) {
    this.rootStore = rootStore;
    this.localizations = initState.localizations;
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
      ru: "Russian(RU)"
    }[this.selectedLanguage];
  }

  @action
  toggleLanguage() {
    this.selectedLanguage = this.selectedLanguage === "en" ? "ru" : "en";
  }

  @action
  selectLanguage(lang: "ru" | "en") {
    this.selectedLanguage = lang;
  }
}
