import RouterStore from "@stores/RouterStore";
import SettingsStore from "@stores/SettingsStore";

export default class RootStore {
  public settingsStore: SettingsStore;
  public routerStore: RouterStore;

  constructor(initState: any) {
    this.routerStore = new RouterStore(this, initState.routerStore);
    this.settingsStore = new SettingsStore(this, initState!.settingsStore);
  }
}
