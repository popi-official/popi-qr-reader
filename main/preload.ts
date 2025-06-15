import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";
import { PostEntryRequest } from "../renderer/types/ApiRequest";

const handler = {
  send(channel: string, value: unknown) {
    ipcRenderer.send(channel, value);
  },
  on(channel: string, callback: (...args: unknown[]) => void) {
    const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
      callback(...args);
    ipcRenderer.on(channel, subscription);

    return () => {
      ipcRenderer.removeListener(channel, subscription);
    };
  },

  postEntry: (data: PostEntryRequest) => ipcRenderer.invoke("post-entry", data),
};

contextBridge.exposeInMainWorld("ipc", handler);

export type IpcHandler = typeof handler;
