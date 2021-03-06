import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import { NavBar ,Icon,Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import Style from './index.css'
import { browserHistory } from 'react-router';

//导入3个切换页面
import RecordHead from '../../../components/Phone/RecordHead';
import Common from '../../../components/Common';
import Report from '../../../components/Report';
import _superagent from 'superagent';
const URL = '/api/report-builder/';
export default class lastupdtime extends Component {
		state={
			obj:{
				d6:0,
				d4:0,
				d1:0,
				d2:0,
				d3:0,
				d7:0,
				d8:0
			}
		}
	 componentWillMount() {
	 	_superagent
			.post(URL+''+413+'/table')
			.set("Content-Type", "application/json")
			.send('{}')
		  	.then(res=>{
				if(res.body.code == 0){
					var obj = {};
					obj =res.body.data.report[0]; 
					this.setState({
						obj:obj
					})
				}else {
					alert(res.body.msg)
				}
			})
			.catch(err=>{
				alert('系统错误')
				this.setState({
					loading:false
				})
			})
	 }
  render() {
    return (
        <div> 
			<div style={{backgroundColor:'#fff',fontSize:'.24rem',padding:'10px'}}><Link to='/business' style={{color:'#aaa'}}>&lt;返回</Link></div>
		  <div className={Style.swiper}>
			   <div className={Style.li}>
					<div className={Style.title}>银保当日录单</div>
					<div className={Style.numer}>
						<div className={Style.littieNum} style={{fontFamily:'微软雅黑'}}>
							<p>{Math.round(this.state.obj.d4)}</p>
							<p>期交</p>
						</div>
						<div className={Style.bigNum} style={{fontFamily:'微软雅黑'}}>
							<p>{Math.round(this.state.obj.d3)}</p>
							<p>新单保费</p>
						</div>
						<div className={Style.littieNum} style={{fontFamily:'微软雅黑'}}>
							<p>{Math.round(this.state.obj.d8)}</p>
							<p>泵交</p>
						</div>
						<div style={{position:'absolute',bottom:'-5px',right:'7px',fontSize:'.24rem',textAlign:'right'}}>单位：万元</div>
					</div>
				</div>
			</div>
            <div className={Style.container} style={{backgroundColor:'#fff'}}>
				<Common code='413' title='0' width='420'/>
			</div>		
      </div>
    );
  }
}



