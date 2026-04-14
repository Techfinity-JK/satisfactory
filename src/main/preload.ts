import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  generateQuotation: (data: unknown) =>
    ipcRenderer.invoke("generate-quotation", data),
  checkForUpdates: () =>
    ipcRenderer.invoke("check-for-updates"),
  openExternalUrl: (url: string) =>
    ipcRenderer.invoke("open-external-url", url),
  getAppVersion: () =>
    ipcRenderer.invoke("get-app-version"),
});
