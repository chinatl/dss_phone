import React, { Component } from 'react';
import {Link} from 'react-router'
import { browserHistory } from 'react-router';
import BranchRank from '../../../components/Phone/BranchRank';


//导入3个切换页面
const Dashboard = () => (
	<div> 
		<div style={{width:'6.4rem','overflow':'hidden'}}>
			  <BranchRank indexCode="001001" />
			  <BranchRank indexCode="012000" />
		</div>
	</div>
)
export default Dashboard;



