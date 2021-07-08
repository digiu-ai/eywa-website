export function validateEmail(email: string) {
  let re = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
  return re.exec(email) != null;
}

export type CancellablePromise<T> = Promise<T> & { cancel: () => void };

export const delay = (timeout: number): CancellablePromise<{}> => {
  const t: any = {};

  const p = new Promise((resolve, _) => {
    t.resolve = resolve;
    t.id = setTimeout(() => resolve(), timeout);
  }) as any;

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  (<any>p).cancel = () => {
    t.resolve();
    clearTimeout(t.id);
  };

  return p;
};

// lazy canvas init since server doesnt have document
const _getCanvas = (() => {
  let canvas: HTMLCanvasElement;
  return () => {
    if (!canvas) canvas = document.createElement("canvas");
    return canvas;
  };
})();

export function textWidth(text: string, font: string) {
  // re-use canvas object for better performance
  //const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  const context = _getCanvas().getContext("2d");
  if (!context) return 0;
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}

export const range = (start: number, end: number, step = 1): number[] =>
  Array.from({ length: end - start }).map((_, i) => i * step + start);

export const isServer = typeof window === "undefined";

export function loadEnvVar(name: string) {
  return isServer ? process.env[name] : window._env_[name];
}
