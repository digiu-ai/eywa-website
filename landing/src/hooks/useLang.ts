import { useStores } from "@stores";
import { useObserver } from "mobx-react-lite";

export const useLanguage = (key: string) => {
  const { settingsStore } = useStores();
  return useObserver(() =>
    settingsStore.localizations &&
    settingsStore.localizations[key] &&
    settingsStore.localizations[key][settingsStore.selectedLanguage]
      ? settingsStore.localizations[key][settingsStore.selectedLanguage]
      : ""
  );
};
