import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import echarts from 'echarts'; 
import ReactEcharts from 'echarts-for-react';
import { Progress } from 'antd';
import Style from './index.css';
var  number = 0;

class policycounttable extends Component {

  //  构建函数
  constructor(props) {
    super(props);
  }
  componentWillMount() {
   
  }
  componentDidMount() {
   
  }
  // 如果参数变化重新取数
  componentWillReceiveProps(nextProps) {
    
  }
	get5(){
		if(this.props.data !== undefined){
			var x = this.props.data.report;
			return Math.round(x[x.length-1].d5)
		}
	}
	getAll(){
		if(this.props.data !== undefined){
			var x = this.props.data.report;
			return Math.round(x[x.length-1].d3)
		}
	}
	getTen(){
		if(this.props.data !== undefined){
			var x = this.props.data.report;
			return Math.round(x[x.length-1].d6)
		}
	}
  // 加工控件数据
  render() {
    return (
      <div className={Style.swiper}>
		   <div className={Style.li}>
				<div className={Style.title}>团险当日录单</div>
				<div className={Style.numer}>
					<div className={Style.littieNum} style={{fontFamily:'微软雅黑'}}>
						<p>{this.get5()}</p>
						<p>5-9年期</p>
					</div>
					<div className={Style.bigNum} style={{fontFamily:'微软雅黑'}}>
						<p>{this.getAll()}</p>
						<p>个险期交</p>
					</div>
					<div className={Style.littieNum} style={{fontFamily:'微软雅黑'}}>
						<p>{this.getTen()}</p>
						<p>10年及以上</p>
					</div>
					<div style={{position:'absolute',bottom:'-5px',right:'7px',fontSize:'.24rem',textAlign:'right'}}>单位：万元</div>
				</div>
			</div>
	</div>
    );
  }
}
policycounttable.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
}
export default connect(({ user, report }) => ({
  user: user,
  params: report.params[`policycounttable`],
  data: report.data[`policycounttable`],
  loading: report.loading[`policycounttable`],
}))(policycounttable)
