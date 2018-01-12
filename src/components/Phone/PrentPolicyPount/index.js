import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import echarts from 'echarts'; 
import ReactEcharts from 'echarts-for-react';

class prentpolicycount extends Component {
  //  构建函数
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch({
      type: 'widgets/setParams',
      payload: {
		widgetId: `prentpolicycount/${this.props.indexCode}`,
        params: {
          branch: this.props.user.selectedBranch
        }
      }
    });
  }
  componentDidMount() {
    // 取控件数据
    this.props.dispatch({
      type: 'widgets/getData',
      payload: {
    	widgetId: `prentpolicycount/${this.props.indexCode}`
      }
    });
  this.getstyle2()
  }
  // 如果参数变化重新取数
  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading && (nextProps.params !== this.props.params)) {
      this.props.dispatch({
        type: 'widgets/getData',
        payload: {
    		widgetId: `prentpolicycount/${this.props.indexCode}`
        }
      });
	  this.getstyle2()

    }
  }
  // 加工控件数据
  getWidgetData() {
	  this.getstyle2()
	if(this.props.data === undefined){
		  return 
	  }
	  var a = this.props.data.details.data;
	  var xarr = [];
	  var yarr = []
	  if(a === undefined){
		  return 
	  }
	  for(var i =a.length-1;i>=0;i--){
		  xarr.push(a[i].branch_name);
		  yarr.push(a[i].count);
	  }
	return  {
			grid: {
				left: '5%',
				right: '8%',
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
						color:'#ccc'
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
						color: '#444',
						fontSize: 12
					},
					interval: 0  

				},
				data: xarr

			},
			series: [{
				barWidth: '50%',
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
                            0, 1, 0, 0,  [
                                {
                                    offset: 0,
                                    color: '#f5746e'
                                },
                                {
                                    offset: 1,
                                    color: '#fc9c72'
                                }
                        ])
                    },
						barBorderRadius: [0, 0, 0, 0],
					},
					data: yarr
                }]
		};
  };
	getstyle2(){
	 if(this.props.data !== undefined){
	 	var x = this.props.data.details.data.length;
		var charHeight = x * 30 +'px';
	  	return { height: charHeight, width: '6.00rem', marginBottom: '9px'}
	  }
	} 
  render() {
    return (
      <div>
        {
          this.props.data && 
		   <ReactEcharts
				option={this.getWidgetData()}
				notMerge={true}
				style={{ height: this.props.data.details.data.length * 25 +'px', width: '6.00rem', marginBottom: '9px'}}
				lazyUpdate={true}
			/>

        }
      </div>
    );
  }
}


prentpolicycount.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
}


export default connect(({ user, widgets },  { indexCode }) => ({
  user: user,
  params: widgets.params[`prentpolicycount/${indexCode}`],
  data: widgets.data[`prentpolicycount/${indexCode}`],
  indexCode,
}))(prentpolicycount)
