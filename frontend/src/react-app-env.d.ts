interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    // Add more env vars here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  