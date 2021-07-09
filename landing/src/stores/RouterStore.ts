import { RootStore } from "./index";
import { History, Location } from "history";
import { observable, runInAction } from "mobx";

export enum ROUTES {
  ROOT = "/",
}

export default class RouterStore {
  public rootStore: RootStore;
  public history: History;

  constructor(rootStore: RootStore, { history }: { history: History }) {
    this.rootStore = rootStore;
    this.history = history;
    this.history.listen((location, action) => {
      this.sync(location);
    });
    this.sync(this.history.location);
  }

  @observable
  currentPath: ROUTES = ROUTES.ROOT;

  @observable
  currentHash = "";

  @observable
  searchParams = new URLSearchParams();

  sync = (location: Location) => {
    runInAction(() => {
      this.currentPath = location.pathname as any;
      this.currentHash = location.hash;
      this.searchParams = new URLSearchParams(location.search);
    });
  };
}
