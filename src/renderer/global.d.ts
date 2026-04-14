interface ElectronAPI {
  generateQuotation: (data: unknown) => Promise<{
    success: boolean;
    filePath?: string;
    cancelled?: boolean;
    error?: string;
  }>;
  checkForUpdates: () => Promise<{
    success: boolean;
    currentVersion?: string;
    latestVersion?: string;
    isNewer?: boolean;
    releaseUrl?: string;
    error?: string;
  }>;
  openExternalUrl: (url: string) => Promise<void>;
  getAppVersion: () => Promise<string>;
}

interface Window {
  electronAPI: ElectronAPI;
}
