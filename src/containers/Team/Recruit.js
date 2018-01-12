import React, { Component } from 'react';
import {Link} from 'react-router'
import { NavBar ,Icon} from 'antd-mobile';
import { browserHistory } from 'react-router';
import { Row, Col ,Table } from 'antd';
import Recruit from '../../components/Phone/Recruit';
//导入3个切换页面
import Report from '../../components/Report';
import moment from 'moment'; 
import Headbar from '../../components/Phone/Header';
var x = new Date();
var month = x.getMonth() + 1;
 export default class Platform extends Component {
  
  render() {
    return (
        <div> 
			<div style={{backgroundColor:'#fff',fontSize:'.24rem',padding:'10px'}}><Link to='/team' style={{color:'#aaa'}}>&lt;返回</Link></div>

            <Recruit />
			<Report 
				code="addsalesforcetable" 
				defaultParams={{branch:"610000",dim:'M',time:month}} 
				drillLevel={['P']} 
				scroll={{x:260}}
				/>
      </div>
    );
  }
}






