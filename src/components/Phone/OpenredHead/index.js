import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import echarts from 'echarts'; 
import ReactEcharts from 'echarts-for-react';
import { Progress } from 'antd';
import Style from './index.css';
var  number = 0;


class premiumscaletable extends Component {
  //  构建函数
  constructor(props) {
    super(props);
  }
  componentWillMount() {
	
	  
  }
  componentDidMount() {
   
  }
  // 如果参数变化重新取数
  
	getnumber(){
		if(this.props.data !== undefined){
			var x = this.props.data.report;
			var num = x[x.length-1].d5;
			num = num + '';
			num = num.replace('%','') -0;
			return num
		}
	}
	getTen(){
		if(this.props.data !== undefined){
			var x = this.props.data.report;
			return x[x.length-1].d7
		}
	}
	getAll(){
		if(this.props.data !== undefined){
			var x = this.props.data.report;
			return x[x.length-1].d4
		}
	}
  // 加工控件数据
  render() {
    return (
      <div style={{overflow:'hidden',width:'6.4rem'}}>
       <div className={Style.charts}>
			<Progress type="dashboard" percent={this.getnumber()} className={Style.progress} style={{padding:0,margin:0,width:'100%',height:'100%'}}/>
		</div>
		<div className={Style.content}>
			<p className={Style.p1}>开门红个险首年期交保费</p>
			<p className={Style.p2} style={{fontFamily:'微软雅黑'}}>{this.getAll()}<span style={{fontSize:'.24rem'}}>万元</span></p>
			<p className={Style.p4} style={{fontFamily:'微软雅黑'}}>10年期及以上:{this.getTen()}<span>万元</span></p>
		</div>
      </div>
    );
  }
}
premiumscaletable.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
}
export default connect(({ user, report }) => ({
  user: user,
  params: report.params[`premiumscaletable`],
  data: report.data[`premiumscaletable`],
  loading: report.loading[`premiumscaletable`],
}))(premiumscaletable)
