interface ElectronAPI {
  generateQuotation: (data: unknown) => Promise<{
    success: boolean;
    filePath?: string;
    cancelled?: boolean;
    error?: string;
  }>;
}

interface Window {
  electronAPI: ElectronAPI;
}
