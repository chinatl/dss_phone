import React, { Component } from 'react';
import {Link} from 'react-router'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import home from './../../../assets/images/home.png'
import home_outline from './../../../assets/images/home-outline.png'
import prem from './../../../assets/images/prem.png'
import prem_outline from './../../../assets/images/prem-outline.png'
import manage from './../../../assets/images/manage.png'
import manage_outline from './../../../assets/images/manage-outline.png'
import people from './../../../assets/images/people.png'
import people_outline from './../../../assets/images/people-outline.png'
import kline from './../../../assets/images/kline.png'
import kline_outline from './../../../assets/images/kline-outline.png'

import Style from './index.css'
var home1;
var home2;
var prem1;
var prem2;
var people1;
var people2;
var kline1;
var kline2;
var manage1;
var manage2;
class Tablebar extends Component {
  	componentWillMount() {
		if(this.props.type === 'home'){
			home1 =  home;
			home2 =  Style.current;
		}else {
			home1 = home_outline;
			home2 = '';
		}
		if(this.props.type === 'business'){
			prem1 =  prem;	
			prem2 =  Style.current;
		}else {
			prem1 =  prem_outline;
			prem2 =  '';
		}
		if(this.props.type === 'team'){
			people1 =  people;
			people2 =  Style.current;
		}else {
			people1 =  people_outline;	
			people2 =  '';
		}
		if(this.props.type === 'kl'){
			kline1 =  kline;
			kline2 =  Style.current;
		}else {
			kline1 =  kline_outline;
			kline2 = '';
		}
		if(this.props.type === 'operate'){
			manage1 =  manage;
			manage2 =  Style.current;
		}else {
			manage1 =  manage_outline;
			manage2 = ''
		}
    }
	render() {
    return (
		<div className={Style.tablebar}>
			<Link to="/home" className={home2}>
				<img src={home1} alt=""/>
				<span>主页</span>
			</Link>
			<Link to="/business" className={prem2}>
				<img src={prem1}alt=""/>
				<span>业务</span>
			</Link>
			<Link to="/team" className={people2}>
					<img src={people1} alt=""/>
				<span>队伍</span>
			</Link>
			<Link to="/kl"  className={kline2} >
					<img src={kline1} alt=""/>
				<span>k线</span>
			</Link>
			<Link to="/operate" className={manage2}>
				<img src={manage1} alt=""/>
				<span>经营</span>
			</Link>
		</div>
		 
    );
  }
}

export default connect(({ global, Tablebar }, { type }) => ({
  global,
  Tablebar,
  type,
}))(Tablebar)


