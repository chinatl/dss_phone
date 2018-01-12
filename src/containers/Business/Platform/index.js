import React, { Component } from 'react';
import {Link} from 'react-router'
import { NavBar ,Icon} from 'antd-mobile';
import Style from './index.css'
import { browserHistory } from 'react-router';
import PremTrend from '../../../components/Phone/Pre';

//导入3个切换页面
 export default class Platform extends Component {
  
  render() {
    return (
        <div> 
			<div style={{backgroundColor:'#fff',fontSize:'.24rem',padding:'10px'}}><Link to='/business' style={{color:'#aaa'}}>&lt;返回</Link></div>
			<PremTrend type='Mobile'></PremTrend>	
      </div>
    );
  }
}

