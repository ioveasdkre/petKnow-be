import { ParsedQs } from 'qs';

interface IGetSearchRequest extends ParsedQs {
  q: string;
}

export { IGetSearchRequest };
