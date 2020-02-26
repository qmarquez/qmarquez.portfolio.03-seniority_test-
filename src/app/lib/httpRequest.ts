import { HttpClient, HttpParams } from '@angular/common/http';
import generateApiURL from './generateApiURL';
import { Observable } from 'rxjs';

type HttpRequest = <T = any>(httpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE', endpoint: string[] | string, requestOptions?: { body?: any; params?: any; }) => Observable<T>;

/**
 * TODO Replace on all services the use httpClient with this.
 */
function httpRequest(httpClient: HttpClient, basePath: string) {
  return function <responseT>(
    httpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE',
    path: string[] | string,
    requestOptions: { body?: any, params?: any } = {}
  ) {
    const args = [];
    const options: any = {};

    const endpoint = [];
    if (Array.isArray(path)) {
      endpoint.push(...path);
    } else {
      endpoint.push(path);
    }

    const URL = generateApiURL(basePath)(...endpoint);
    args.push(URL);


    const { body } = requestOptions;
    if (body) {
      args.push(body);
    }

    const { params } = requestOptions;
    if (params) {
      const httpParams = new HttpParams;
      Object.keys(params)
        .forEach(key => {
          httpParams.set(key, params[key]);
        });
      options.params = httpParams;
    }

    if (Object.keys(options).length) {
      args.push(options);
    }
    
    return httpClient[httpMethod.toLowerCase()]<responseT>(...args);
  };
}

export { httpRequest, HttpRequest };
