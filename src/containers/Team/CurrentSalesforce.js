import React, { Component } from 'react';
import {Link} from 'react-router'
import { NavBar ,Icon} from 'antd-mobile';
import { browserHistory } from 'react-router';
import { Row, Col } from 'antd';
import CurrentSalesforce from '../../components/Phone/Nowpeople';
import Report from '../../components/Report';
import moment from 'moment'; 

//导入3个切换页面
 export default class Platform extends Component {
  
  render() {
    return (
        <div> 
			<div style={{backgroundColor:'#fff',fontSize:'.24rem',padding:'10px'}}><Link to='/team' style={{color:'#aaa'}}>&lt;返回</Link></div>
			<CurrentSalesforce />
			<Report 
			code="currentsalesforcetable" 
			defaultParams={{branch:"610000"}} 
			drillLevel={['P']} 
			scroll={{x:400}}
			/>
      </div>
    );
  }
}

