import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import echarts from 'echarts'; 
import ReactEcharts from 'echarts-for-react';

class effectpremiumdetail extends Component {
  //  构建函数

  componentWillMount() {
    this.props.dispatch({
      type: 'widgets/setParams',
      payload: {
		widgetId: `effectpremiumdetail/${this.props.indexCode}`,
        params: {
          branch: this.props.user.selectedBranch,
		  index_code: '011001',
        }
      }
    });
  }
  componentDidMount() {
    // 取控件数据
    this.props.dispatch({
      type: 'widgets/getData',
      payload: {
    	widgetId: `effectpremiumdetail/${this.props.indexCode}`,
      }
    });
  }
  // 如果参数变化重新取数
  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading && (nextProps.params !== this.props.params)) {
      this.props.dispatch({
        type: 'widgets/getData',
        payload: {
    		widgetId: `effectpremiumdetail/${this.props.indexCode}`
        }
      });
    }
  }
  // 加工控件数据
  getWidgetData() {
	  if(this.props.data === undefined){
		  return 
	  }
	 
	  var a = this.props.data.details.data;
	  var xarr = [];
	  var yarr = []
	  for(var i =a.length-1;i>=0;i--){
		  xarr.push(a[i].branch_name);
		  yarr.push(a[i].completed);
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
                            0, 0, 1, 0, [
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
	
  render() {
    return (
      <div>
        {
          this.props.data && 
		   <ReactEcharts
				option={this.getWidgetData()}
				notMerge={true}
				style={{ height: this.props.data.details.data.length * 30 +'px', width: '6.00rem', marginBottom: '9px'}}
				lazyUpdate={true}
			/>
        }
      </div>
    );
  }
}

effectpremiumdetail.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ user, widgets },  { indexCode }) => ({
  user: user,
  indexCode,
  params: widgets.params[`effectpremiumdetail/${indexCode}`],
  data: widgets.data[`effectpremiumdetail/${indexCode}`],
  loading: widgets.loading[`effectpremiumdetail/${indexCode}`],
}))(effectpremiumdetail)
