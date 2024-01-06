import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const connectionInstance = axios.create({
  timeout: 10_000,
  baseURL: '',
  paramsSerializer(params: { [x: string]: any }) {
    const searchParams = new URLSearchParams();
    for (const key of Object.keys(params)) {
      const param = params[key];
      if (param !== undefined) {
        if (Array.isArray(param)) {
          let ids = '';
          param.forEach((p, i) => {
            if (i + 1 === param.length) {
              ids += `${p}`;
            } else {
              ids += `${p},`;
            }
          });
          searchParams.append(key, ids);
        } else {
          searchParams.append(key, param);
        }
      }
    }
    return searchParams.toString();
  },
});

connectionInstance.interceptors.request.use(
  async (requestConfig: InternalAxiosRequestConfig<any>) => {
    console.log(
      `Request: ${requestConfig.method} - ${requestConfig.url}`,
      requestConfig,
    );
    return requestConfig;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

connectionInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(
      `Response: ${response.config.method} - ${response.config.url}`,
      response,
    );
    return response;
  },
  async error => {
    return Promise.reject(error);
  },
);

export const setTokenHeadder = (token: string) => {
  connectionInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default connectionInstance;
