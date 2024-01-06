import { AxiosResponse } from 'axios';

export interface BaseResponse<T> {
  data: T;
  status: number;
}

export type FetchApiResponse<T> = Promise<AxiosResponse<BaseResponse<T>>>;
