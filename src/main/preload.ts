import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  generateQuotation: (data: unknown) =>
    ipcRenderer.invoke("generate-quotation", data),
});
