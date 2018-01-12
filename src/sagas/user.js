import { call, put, fork, select, takeLatest } from 'redux-saga/effects';
import { validate } from '../services/user';
import { replace } from 'react-router-redux';
import { Modal } from 'antd';
import md5 from 'md5';

const alert = Modal.alert;


/**
 * 用户登录
 * @param {*登录信息} action
 */
function* login(action) {
  yield put({type: 'user/showLoading'});
  try{
    const { code, accessToken, user } = yield call(validate, {
      id: action.payload.id,
      password: md5(action.payload.password),
    });
    yield put({type: 'user/login/success',payload:{accessToken, user, selectedBranch: user.branch_code}});
    yield put({type: 'widgets/setBranch',payload:user.branch_code});
    localStorage.setItem('accessToken', accessToken);
    //　跳转到登录前地址
    yield put(replace(action.payload.redirect));
  }catch (err){
    yield put({type: 'user/login/failed'});
  }
}

/**
 * 用户注销
 */
function* logout(){
  localStorage.removeItem('accessToken');
  yield put({type: 'user/logout'});
}


/**
 * 选择全局机构
 * @param {*信息} action
 */
function* selectBranch(action) {
  const { widgets } = yield select();
	

  let widgetIds = Object.keys(widgets.params);
  for (let p of widgetIds){
    if (widgets.params[p].branch) {
      yield put({
        type: 'widgets/setParams',
        payload: {
          widgetId: p,
          params: {
            branch: action.payload.branch,
          }
        }
      });
    }
  }

}


function* watchLogin() {
  yield takeLatest('user/login', login);
}

function* watchSelectBranch() {
  yield takeLatest('user/selectBranch', selectBranch);
}

export default function* () {
  yield fork(watchLogin);
  yield fork(watchSelectBranch);
}
