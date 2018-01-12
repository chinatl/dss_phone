import React, {
	Component
} from 'react';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import {
	connect
} from 'react-redux';
import PropTypes from 'prop-types';
import Style from './index.css';
import Branch from './../../../assets/data/branchlist.json'
import Ajax from '../../Ajax'
class Chart extends Component {
	state = {
		Xdata: [],
		Ddata:[]
	}
  	componentWillMount() {
		var url = this.props.url;
		var data = this.props.data;
		var _this = this;
		if(url === undefined){
			return 
		}
		Ajax({
			url:'widgets/'+url,
			data:data,
			success:function(data){
				console.log(data)
				var x = data.data.details.data;
				var xArr = [];
				var dArr = [];
				for(var i =0;i<x.length;i++){
					xArr[i] = x[i].branch_name;
					dArr[i] = x[i].completed;
				}
				_this.setState({
					Xdata:xArr,
					Ddata:dArr,
				})
			}
		})
  	} 
	getOption() {
		const option = {
			grid: {
				left: '5%',
				right: '5%',
				bottom: '2%',
				top: '2%',
				containLabel: true
			},
			xAxis: {
				position: 'top',
				axisLabel: {
					textStyle: {
						color: '#aaa',
						fontSize: 14,

					}
				},
				label:{
					normal:{
						show:true,
						color:'#000'
					}
				},
				splitNumber: 3,
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				},
				splitLine: {
					show: true,
					lineStyle:{
						color:'#aaa'
					}
				},
			},
			yAxis: {
				type: 'category',
				axisLine: {
					show:false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					textStyle: {
						color: '#aaa',
						fontSize: 12
					}
				},
				data: this.state.Xdata

			},
			series: [{
				barWidth: '35%',
				type: 'bar',
				stack: '总量',
				z: 3,
				label:{
					normal:{
						show:true,
						position:'right',
						color:'#ccc'
					}
				},
				itemStyle: {
					normal: {
						position: 'right',
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#fc9b72'
                                },
                                {
                                    offset: 0.5,
                                    color: '#f67a6f'
                                },
                                {
                                    offset: 1,
                                    color: '#f5746e'
                                }
                        ])
                    },
						barBorderRadius: [0, 0, 0, 0],
					},
					data: this.state.Ddata
                }]
		};
		return option
	}
	handleChange(e){
		console.log('1')
	}
	render() {
			return ( <
				div style = {
					{
						width: '100%'
					}
				} >
				<
				ReactEcharts option = {
					this.getOption()
				}
		   			onClick={()=>this.handleChange()}
			   		notMerge={true}
              		onEvents={this.onEvents}
              		style={{height: '300px', width: '95%'}} 
              		lazyUpdate={true}
				  style = {{height: '300px',
						width: '320px',
						margin: '0 auto'
					}}/>< /div >
		)
	}
}

export default connect(({Chart}, {url,data}) => ({
	global,
	Chart,
	url,
	data
}))(Chart)
