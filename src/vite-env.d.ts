/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_DATA_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
