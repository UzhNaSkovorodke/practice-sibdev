import { storage } from 'src/api';
import { logoutObserver } from 'src/api/observers';
import { API_URLS } from 'src/consts';
import { setTokens } from 'src/utils/requests';

import requestApi from '../fetchApi';

const refreshRequest = (localRefreshToken, APIRequestError) => {
  return requestApi
    .POST(`${API_URLS.auth}token/refresh/`, {
      body: { refresh: localRefreshToken },
    })
    .then((res) => {
      setTokens(res);
    })
    .catch((error) => {
      storage.DELETE('access');
      storage.DELETE('refresh');
      logoutObserver.notify();
      throw new APIRequestError('Ваш токен не действителен', undefined, error.status);
    });
};

export default refreshRequest;
