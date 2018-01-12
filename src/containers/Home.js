import React, { Component } from 'react';
import {  WhiteSpace,   Carousel } from 'antd-mobile';

import banner0 from './../assets/images/banner0.png'
import banner1 from './../assets/images/banner1.png'
//导入3个切换页面
import Gexian from './Home/gexian.js';
import Tuanxian from './Home/tuanxian.js';
import Yinbao from './Home/yinbao.js';
import Style from './Home.css'

import Tablebar from '../components/Phone/Tablebar';
import PickView from '../components/Common/PickView';
import { createForm } from 'rc-form';
class Home extends Component {
	state={
		index:'2'
	}
	handleChange(index){
		console.log(index)
		this.setState({
			index
		})
	}
	render() {
    return (
        <div style={{paddingBottom:'.95rem'}}> 
	  		<PickView></PickView>
			<Carousel
              	  style={{height:'2.55rem',width:'100%'}}
				  autoplay={false}
				  infinite
				  selectedIndex={0}
				  swipeSpeed={35}
					  >
					  <img src={banner0} alt="" style={{width:'100%',height:'2.55rem'}}/>
					  <img src={banner1} alt="" style={{width:'100%',height:'2.55rem'}}/>
			</Carousel>
			<div className={Style.ul}>
         		<ul ref='ul'>
         			<li className={this.state.index === '1' || Style.current} onClick={()=>this.handleChange("2")}>个险</li>
         			<li className={this.state.index === "2" || Style.current} onClick={()=>this.handleChange("1")}>银保</li>
         		</ul>
         	</div>
          	<div className={Style.content} ref='gexian'>
					{this.state.index === '1' || <Gexian style={{width:'100%'}}></Gexian>}
					{this.state.index === '2' || <Yinbao style={{width:'100%'}}></Yinbao>}
          	</div>	
            <WhiteSpace />
		
            <Tablebar type='home'></Tablebar>
		</div>
    );
  }
}
export default Home;

