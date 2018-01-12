import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router';
//import { routerActions } from 'react-router-redux'
//import { UserAuthWrapper } from 'redux-auth-wrapper';
import App from './App';
// // 下面的代码是手机页面
import Home from './containers/Home.js';
import Business from './containers/Business.js';
import Team from './containers/Team.js';
import Kl from './containers/Kl.js';
import Operate from './containers/Operate.js';

import Openred from './containers/Business/Openred';
import Platform from './containers/Business/Platform';
import Target from './containers/Business/Target';
import Recordlist from './containers/Business/Recordlist';
import Score from './containers/Business/Score';

import CurrentSalesforce from './containers/Team/CurrentSalesforce';
import Recruit from './containers/Team/Recruit';
import SalesforceIndex from './containers/Team/SalesforceIndex';
import SalesforceTrend from './containers/Team/SalesforceTrend';

import Newpage from './containers/Newpage';

import Gep from './containers/Business/gep';
import yinp from './containers/Business/yinp';

import Test from './containers/Test.js';
//const UserIsAuthenticated = UserAuthWrapper({
//  authSelector: state => state.user.user, // how to get the user state
//  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
//  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
//})


const Routes = ({ history }) =>{
  return (
    <Router history={history}>
      <Route component={App}>
       	<Route path="/" component={Home} />
		<Route path="test" component={Test}/>
	  
       	<Route path="home" component={Home}/>
       	<Route path="business" component={Business}/>
       	<Route path="team" component={Team}/>
       	<Route path="kl" component={Kl}/>
       	<Route path="operate" component={Operate}/>
       	<Route path="openred" component={Openred}/>
       	<Route path="platform" component={Platform}/>
       	<Route path="target" component={Target}/>
       	<Route path="recordlist" component={Recordlist}/>
       	<Route path="score" component={Score}/>
	  
       	<Route path="CurrentSalesforce" component={CurrentSalesforce}/>
       	<Route path="recruit" component={Recruit}/>
       	<Route path="SalesforceIndex" component={SalesforceIndex}/>
       	<Route path="SalesforceTrend" component={SalesforceTrend}/>
       	<Route path="newpage" component={Newpage}/>
		  
       	<Route path="gep" component={Gep}/>
       	<Route path="yinp" component={yinp}/>
 
	</Route>
      
    </Router>
  );
}


Routes.propTypes = {
  history: PropTypes.any,
  store: PropTypes.any,
};

export default Routes;
