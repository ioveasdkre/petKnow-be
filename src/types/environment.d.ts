export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DB_PORT: number;
      DB_USER: string;
      MONGODB_URI: string;
      IDM_URI: string;
      CMG_URI: string;
      COVER_URL: string;
      VIMEO_URL: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}
