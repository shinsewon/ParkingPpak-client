import {APIService} from './apiService';

//이 부분은 나중에 .env로 정리하렵니다.
const opinetURL = 'http://www.opinet.co.kr';

const opinetAPI = new APIService({
  baseURL: opinetURL,
  timeout: 5000,
  timeoutErrorMessage: 'Request Timeout',
});

export {opinetAPI};
