import xFetch from './xFetch';
import config from '../config';
// config.apiPrefix = 'http://localhost:3000/api/dss'
export function* getData(params) {
  return yield xFetch(`${config.apiPrefix}/widgets/${params.widgetId.toLowerCase()}`, {
    method: 'post',
    dataType: 'json',
    body: JSON.stringify(params.params)
  });
}