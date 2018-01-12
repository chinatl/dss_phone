import React, { Component } from 'react';
import {Link} from 'react-router'
import { NavBar ,Icon} from 'antd-mobile';
import { browserHistory } from 'react-router';
import { Row, Col ,Table} from 'antd';
import SalesforceTrend from '../../components/Phone/SalesforceTrend';
import Report from '../../components/Report';
import moment from 'moment'; 
import Headbar from '../../components/Phone/Header';
 export default class Platform extends Component {
  
  render() {
    return (
        <div> 
					<div style={{backgroundColor:'#fff',fontSize:'.24rem',padding:'10px'}}><Link to='/team' style={{color:'#aaa'}}>&lt;返回</Link></div>

			<SalesforceTrend />
      </div>
    );
  }
}

