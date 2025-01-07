import { ResponseData } from './register/types';

export type Session = Omit<ResponseData, 'message'>;
