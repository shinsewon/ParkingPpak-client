import axios, {
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  AxiosInstance,
} from "axios";

export class APIService {
  public instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create({
      ...config,
    });
  }

  protected onSuccess = (res: AxiosResponse) => {
    return res.data;
  };

  protected onError = (err: AxiosError) => {
    console.error("Request Failed:", err.config);
    if (err.response) {
      console.error("Status:", err.response.status);
      console.error("Data:", err.response.data);
      console.error("Headers:", err.response.headers);
    } else {
      console.error("Error message:", err.message);
    }
    return Promise.reject(err.response || err.message);
  };

  public get = (url: string, config?: AxiosRequestConfig) =>
    this.instance.get(url, config).then(this.onSuccess).catch(this.onError);

  public post = (url: string, data?: any, config?: AxiosRequestConfig) =>
    this.instance
      .post(url, data, config)
      .then(this.onSuccess)
      .catch(this.onError);

  public patch = (url: string, data?: any, config?: AxiosRequestConfig) =>
    this.instance
      .patch(url, data, config)
      .then(this.onSuccess)
      .catch(this.onError);

  public delete = (url: string, config?: AxiosRequestConfig) =>
    this.instance.delete(url, config).then(this.onSuccess).catch(this.onError);
}
