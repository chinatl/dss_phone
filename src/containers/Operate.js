import React, { Component } from 'react';
import Style from './Operate.css'

import KPIMap from '../components/Phone/KPIMap';
import KPIDetails from '../components/Phone/KPIDetails';

import Tablebar from '../components/Phone/Tablebar';
//导入3个切换页面
class Operate extends Component {
componentWillMount() {

}
  render() {
    return (
        <div> 
			<div className={Style.container}>
				<div className={Style.box}>
					<KPIDetails type='Mobile'/>
				</div>
			</div>
          <KPIMap />
      		<Tablebar type='operate'/>	
      </div>
    );
  }
}
export default Operate;


