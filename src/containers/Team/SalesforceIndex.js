import React, { Component } from 'react';
import {Link} from 'react-router'
import { NavBar ,Icon} from 'antd-mobile';
import { browserHistory } from 'react-router';
import { Row, Col } from 'antd';
import SalesforceIndex from '../../components/Phone/SalesforceIndex';

import Report from '../../components/Phone/Report';
import moment from 'moment'; 
import Headbar from '../../components/Phone/Header';

//导入3个切换页面
 export default class Platform extends Component {
  
  render() {
    return (
        <div> 
					<div style={{backgroundColor:'#fff',fontSize:'.24rem',padding:'10px'}}><Link to='/team' style={{color:'#aaa'}}>&lt;返回</Link></div>

		 <Row gutter={16} style={{width:'6.4rem',overflow:'hidden',margin:'.2rem 0'}}>
		  <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{marginBottom:'12px'}}><SalesforceIndex type='numberQ' indexname='有效人力'/></Col>
		  <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{marginBottom:'12px'}}><SalesforceIndex type='numberM' indexname='T50人力'/></Col>
		  <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{marginBottom:'12px'}}><SalesforceIndex type='rate' indexname='增员率'/></Col>
		</Row>	
      </div>
    );
  }
}

