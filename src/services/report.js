import xFetch from './xFetch';
import config from '../config';

export function* getData(params) {
  return yield xFetch(`${config.apiPrefix}eck/test/report/${params.reportId.toLowerCase()}`, {
    method: 'post',
    dataType: 'json',
    body: JSON.stringify(params.params),
  });
}



export function* getDataMobile(params) {
  return yield xFetch(`${config.apiPrefix}/widgets/${params.reportId.toLowerCase()}`, {
    method: 'post',
    dataType: 'json',
    body: JSON.stringify(params.params),
  });
}