export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DB_PORT: number;
      DB_USER: string;
      MONGODB_URL: string;
      COVERPARAMS_URL: string;
      COVER_URL: string;
      MOVIE_URL: string;
      ENV: 'test' | 'dev' | 'prod';
      JWT_SECRET: string;
      MERCHANTID: string;
      REPONDTYPE: string;
      VERSION: number;
      GOLDFLOWHASHKEY: string;
      GOLDFLOWHASHIV: string;
      GOLDFLOWHALGORITHM: string;
      ORDERSALT: string;
      ORDERHASHKEY: string;
      ORDERHASHIV: string;
      ORDERALGORITHM: string;
    }
  }
}
