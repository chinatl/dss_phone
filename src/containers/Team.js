import React, { Component } from 'react';
import {Link} from 'react-router'
import Style from './Team.css'


//导入3个切换页面

import currentsalesforce from './../assets/images/currentsalesforce.svg'
import recruit from './../assets/images/recruit.svg'
import salesforce from './../assets/images/salesforce.svg'
import salesforceindex from './../assets/images/salesforceindex.svg'

import Tablebar from '../components/Phone/Tablebar';

class Team extends Component {
  
  render() {
    return (
        <div> 
            <ul className={Style.item}>
				<li>
                    <Link to="/CurrentSalesforce" >
                        <img src={currentsalesforce} alt=""/> 
                        <span>当前人力</span>
                    </Link>
                </li> 
                <li>
                    <Link to="/SalesforceIndex">
                         <img src={salesforceindex} alt=""/> 
                        <span>人力指标</span>
                   </Link>
                </li>
                <li>
                    <Link to="/recruit">
                         <img src={recruit} alt=""/> 
                        <span>增员分析</span>
                   </Link>
                </li>   
                <li>
				 	<Link to="/SalesforceTrend">
                         <img src={salesforce} alt=""/> 
                        <span>人力趋势</span>
                   </Link>	
                </li>   
            </ul>
            <Tablebar type='team'></Tablebar>
      </div>
    );
  }
}
export default Team




