export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DB_PORT: number;
      DB_USER: string;
      MONGODB_URL: string;
      IDM_URL: string;
      CMG_URL: string;
      COVER_URL: string;
      VIMEO_URL: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}
