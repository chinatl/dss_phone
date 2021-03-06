import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Card, Radio, Alert, Spin, Col, Table} from 'antd';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import classNames from 'classnames';
import styles from './styles.css';

class PremTrend extends Component {
    // 构建函数
    constructor(props) {
        super(props);
        this.state = {
            channel: 'P',
        }
    }
    componentWillMount() {
        //　设置默认参数
        this.props.dispatch({
            type: 'widgets/setParams',
            payload: {
                widgetId: 'PremTrend',
                params: {
                    branch: this.props.user.selectedBranch,
                    index_code: [ '666201','666101'],
                    time: 'D',
                    period: 15
                }
            }
        });
    }
    componentDidMount() {
        // 取控件数据
        this.props.dispatch({
            type: 'widgets/getData',
            payload: {
                widgetId: 'PremTrend'
            }
        });
    }
    // 如果参数变化重新取数
    componentWillReceiveProps(nextProps) {
        if (!nextProps.loading && nextProps.params.index_code && (nextProps.params !== this.props.params)) {
            this.props.dispatch({
                type: 'widgets/getData',
                payload: {
                    widgetId: 'PremTrend'
                }
            });
        }
    }
    getOption(index) {
        return {
            color: ['#61A5E8', '#7ECF51', '#EECB5F'],
            tooltip: {
                trigger: 'axis',
                textStyle: {
                    fontSize: 15,
                    color: "#fff",
                }
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { readOnly: false },
                    magicType: { type: ['line', 'bar'] },
                    restore: {},
                    saveAsImage: {}
                }
            },
            legend: {
                orient: 'horizontal',
                itemGap: 20,
                //itemWidth:16,
                //itemHeight:12,
                data: [ '录单','实收'],
                textStyle: {
                    color: '#000',
                },
                left: 8,
            },
            grid: {
                left: '3%',
                right: '4%',
                top: '10%',
                bottom: '10%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                //在（type: 'category'）中设置data有效
                data: this.props.data[index].time,
            }],
            yAxis: [{
                type: 'value',
            }],
            series: [{
                name: '录单',
                type: 'line',
                symbolSize: 8,
                lineStyle: { //线条样式 
                    normal: {
                        width: 2
                    }
                },
                itemStyle: { //折现拐点标志的样式
                    normal: {
                        color: '#7ECF51'
                    }
                },
                data: this.props.data[index + 1].data,
            }, {
                name: '实收',
                type: 'line',
                symbolSize: 8,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f15246'
                    }
                },
                data: this.props.data[index].data,
            }
            ] //series结束
        }; // option结束
    }

    render() {
        const columns = [{
            title: '日期',
            dataIndex: 'time',
            key: 'time',
          },{
            title: '录单',
            dataIndex: 'record',
            key: 'record'
          },{
            title: '实收',
            dataIndex: 'force',
            key: 'force'
          }]
          const index = this.state.channel==='P'?0:(this.state.channel==='G'?2:4)
          const data = []
          if(this.props.data)
          for(var i = 0;i<this.props.data[index].time.length;i++)
          data.push({
            time: this.props.data[index].time[i],
            record: this.props.data[index + 1].data[i],
            force: this.props.data[index].data[i],
          })
          
        return (
            <Spin spinning={this.props.loading} size="large" style={{height:'100px'}} tip="加载中...">
                <Card
                    title={this.props.type === 'Mobile' ? " " : "保费平台"}
                    extra={
				<div style={{ marginRight: '15px',height:'50px',marginBottom:'50px' }} className={styles.datetime}>
							 <Radio.Group size="small" value={this.props.params ? this.props.params.time : ''} onChange={(v) => {
											//　设置默认参数
											this.props.dispatch({
												type: 'widgets/setParams',
												payload: {
													widgetId: 'PremTrend',
													params: {
														time: v.target.value,
														period: classNames({
															15: v.target.value === 'D',
															12: v.target.value === 'M',
															10: v.target.value === 'W',
															5: v.target.value === 'Y',
														})
													}
												}
											});
										}}>
                                <Radio.Button value="D">日</Radio.Button>
                                <Radio.Button value="W">周</Radio.Button>
                                <Radio.Button value="M" style={{borderRight:'none'}}>月</Radio.Button>
                                <Radio.Button value="Y" style={{borderRight:'none',display:'none'}}>年</Radio.Button>
                            </Radio.Group>
                                <Radio.Group style={{display:'none'}} size="small" value={this.state.channel} onChange={(v) => {
                                    this.setState({
                                        channel: v.target.value,
                                    });
                                }}>
                                    <Radio.Button value="P" style={{width:'34%'}}>个险</Radio.Button>
                                    <Radio.Button value="G" style={{width:'34%'}}>团险</Radio.Button>
                                    <Radio.Button value="B" style={{width:'34%',borderRight:'none'}}>银保</Radio.Button>
                                </Radio.Group>
                       
                        </div>
                    }
                    bodyStyle={{ padding: 0 }}
                >
                    {
                        this.props.data &&
                        <ReactEcharts
                            option={this.getOption(parseInt(index))}
                            notMerge={true}
                            style={{ height: '410px', width: '100%' }}
                            lazyUpdate={true}
                        />
                    }
                    <div  className={styles.PremTrend}>
                    {
                        this.props.data &&this.props.type==='Mobile'&&
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Table
                                columns={columns}
                                dataSource={data}
                                pagination={false}
                                rowKey="time"
                                size="small"
                                bordered
                                scroll={this.props.scroll}
                            />
                        </Col>
                    }
                    </div>
                    {
                        !this.props.data &&
                        <Alert
                            message="提示"
                            description="暂无数据"
                            type="warning"
                            showIcon
                        />
                    }
                </Card>
            </Spin>
        );
    }
}
PremTrend.propTypes = {
    location: PropTypes.object,
    dispatch: PropTypes.func,
}
export default connect(({ user, widgets }, { type }) => ({
    user,
    type,
    params: widgets.params.PremTrend,
    data: widgets.data.PremTrend,
    loading: widgets.loading.PremTrend,
}))(PremTrend)