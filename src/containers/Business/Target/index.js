import React, { Component } from 'react';
import {Link} from 'react-router'
import { NavBar ,Icon} from 'antd-mobile';
import MainBoard from '../../../components/Phone/MainBoard';

//导入3个切换页面
const Dashboard = () => (
	<div> 
		<div style={{width:'6.4rem','overflow':'hidden'}}>
			  <MainBoard type='Mobile'/>
		</div>
	</div>
)
export default Dashboard;



