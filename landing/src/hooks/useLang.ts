import { useStores } from "@stores";
import { useObserver } from "mobx-react-lite";

export const useLanguage = () => {
  const { settingsStore } = useStores();
  return useObserver(() => settingsStore.selectedLanguage);
};
