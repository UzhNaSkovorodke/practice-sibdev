import { logoutObserver } from 'src/api/observers';
import { API_URLS } from 'src/consts';
import { setTokens } from 'src/utils/requests';

import requestApi from '../fetchApi';
import storage from '../storage';

const BASE_URL = process.env.REACT_APP_BASE_URL;
/**
 * @param {string} message
 * @param {*} [details]
 */
class APIRequestError {
  constructor(message, details, status) {
    this.message = message;
    this.details = details;
    this.status = status;
    this.name = `Ошибка обращения к ${BASE_URL} API`;
  }
}

const refreshRequest = () => {
  const refreshTokenLocal = storage.GET('refresh');
  return requestApi
    .POST(`${API_URLS.auth}token/refresh/`, {
      body: { refresh: refreshTokenLocal },
    })
    .then((res) => {
      setTokens(res);
    })
    .catch((error) => {
      logoutObserver.notify();
      throw new APIRequestError('Ваш токен не действителен', undefined, error.status);
    });
};

export default refreshRequest;
