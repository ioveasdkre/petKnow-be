import { ParsedQs } from 'qs';

interface IGetSearcheRequest extends ParsedQs {
  q: string;
}

export {
  IGetSearcheRequest,
};
