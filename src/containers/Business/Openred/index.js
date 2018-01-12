import React, { Component } from 'react';
import {Link} from 'react-router';
import { NavBar ,Icon} from 'antd-mobile';
import Style from './index.css'

import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Row, Col } from 'antd';
import IndexList from '../../../components/Phone/IndexList';
import KLine from '../../../components/Phone/KLine';

import Report from '../../../components/Report'
import OpenredHead from '../../../components/Phone/OpenredHead'


//导入3个切换页面
class Openred extends Component {
	  
	componentWillMount() {
		
	}
	handleChange1(){
		this.refs.div1.style.display = 'block';
		this.refs.div2.style.display = 'none';
		this.refs.span1.className = Style.current;
		this.refs.span2.className = ''
	}
	handleChange2(){
		this.refs.div2.style.display = 'block';
		this.refs.div1.style.display = 'none';
		this.refs.span2.className = Style.current;
		this.refs.span1.className = ''
	}
	render() {
		return (
			<div> 
				<div style={{backgroundColor:'#fff',fontSize:'.24rem',padding:'10px'}}><Link to='/business' style={{color:'#aaa'}}>&lt;返回</Link></div>
				<div className={Style.circlebox}>
					<OpenredHead></OpenredHead>
				</div>
				<div className={Style.container}>
					<div className={Style.tab}>
						<span onClick={()=>this.handleChange1()} ref='span1' className={Style.current}>预算目标</span>
						<span onClick={()=>this.handleChange2()} ref='span2'>保费占比</span>
					</div>
					<div ref='div1'>
						<Report 
						code="premiumscaletable" 
						defaultParams={{branch:"610000",task_type:'Q'}} 
						drillLevel={[]} 
						scroll={{x:600}}
						/>
					</div>
					<div ref='div2' style={{display:'none'}}>
						<Report
						code="effectpremiumdetailtable"
						defaultParams={{branch:"610000"}}
						scroll={{x:375}}
						drillLevel={['P']}
						/>
					</div>
				</div>		

		  </div>
    );
  }
}
export default Openred;









