import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'
import Routes from './routes';
import configureStore from './store';
import appHistory from './history';
import './styles/index.css';
const store = configureStore();
const history = syncHistoryWithStore(appHistory, store);
!function(n){
    var  e=n.document,
         t=e.documentElement,
         i=640, // i为设计图尺寸
         d=i/100,
         o="orientationchange"in n?"orientationchange":"resize",
         a=function(){
             var n=t.clientWidth||320;n>768&&(n=768);
             t.style.fontSize=n/d+"px"
         };
         e.addEventListener&&(n.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1));
        document.body.style.fontSize = '14px';
}(window);//将 rem 作为单位.适配720像素以下的屏幕;
ReactDOM.render(
  <Provider store={store}>
    <Routes history={history}/>
  </Provider>,
  document.getElementById('root')
);