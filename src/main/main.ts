import { app, BrowserWindow, ipcMain, dialog, shell } from "electron";
import * as path from "path";
import * as https from "https";
import { generateQuotation } from "./quotationGenerator";

// ── Update check config ────────────────────────────────────────────────────
const GITHUB_OWNER = "Techfinity-JK";
const GITHUB_REPO  = "satisfactory";
const CURRENT_VERSION = app.getVersion(); // reads "version" from package.json

let mainWindow: BrowserWindow | null = null;

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));

  // Open DevTools only in development
  if (!app.isPackaged) {
    mainWindow.webContents.openDevTools();
  }

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
ipcMain.handle("check-for-updates", async () => {
  return new Promise((resolve) => {
    const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`;
    const options = {
      headers: { "User-Agent": "satisfactory-app" },
    };
    https.get(url, options, (res) => {
      let body = "";
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => {
        try {
          if (res.statusCode === 404) {
            resolve({ success: false, error: "No releases found on GitHub." });
            return;
          }
          const json = JSON.parse(body);
          const latestTag: string = (json.tag_name || "").replace(/^v/, "");
          const releaseUrl: string = json.html_url || "";
          const isNewer = latestTag !== "" && latestTag !== CURRENT_VERSION;
          resolve({
            success: true,
            currentVersion: CURRENT_VERSION,
            latestVersion: latestTag,
            isNewer,
            releaseUrl,
          });
        } catch {
          resolve({ success: false, error: "Failed to parse update response." });
        }
      });
    }).on("error", (err) => {
      resolve({ success: false, error: err.message });
    });
  });
});

ipcMain.handle("open-external-url", (_event, url: string) => {
  shell.openExternal(url);
});

ipcMain.handle("get-app-version", () => CURRENT_VERSION);

ipcMain.handle("generate-quotation", async (_event, data) => {
  try {
    const { filePath } = await dialog.showSaveDialog({
      title: "Save Quotation",
      defaultPath: data.companyName ? `${data.companyName} - IQ.docx` : `Quotation-${Date.now()}.docx`,
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
