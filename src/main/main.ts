import { app, BrowserWindow, ipcMain, dialog } from "electron";
import * as path from "path";
import { generateQuotation } from "./quotationGenerator";

let mainWindow: BrowserWindow | null = null;

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));

  // Open DevTools for debugging
  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// IPC Handlers
ipcMain.handle("generate-quotation", async (_event, data) => {
  try {
    const { filePath } = await dialog.showSaveDialog({
      title: "Save Quotation",
      defaultPath: `Quotation-${Date.now()}.docx`,
      filters: [{ name: "Word Documents", extensions: ["docx"] }],
    });

    if (filePath) {
      await generateQuotation(data, filePath);
      return { success: true, filePath };
    }
    return { success: false, cancelled: true };
  } catch (error) {
    return { success: false, error: String(error) };
  }
});
