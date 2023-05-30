export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DB_PORT: number;
      DB_USER: string;
      MONGODB_URL: string;
      COVER_URL: string;
      ENV: 'test' | 'dev' | 'prod';
      JWT_SECRET: string;
      MERCHANTID: string;
      REPONDTYPE: string;
      VERSION: number;
      ALGORITHM: string;
      GOLDFLOWHASHKEY: string;
      GOLDFLOWHASHIV: string;
      ORDERSALT: string;
      ORDERHASHKEY: string;
      ORDERHASHIV: string;
    }
  }
}
