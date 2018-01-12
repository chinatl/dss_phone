import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Row, Col, Card, Spin, Table } from 'antd';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import styles from './styles.css';
import classNames from 'classnames';

const SFlegend = ['当前签约', '当月T50', '今日参会', '当季有效']
const columns = [{
    title: '机构',
    dataIndex: 'branch_name',
    key: 'branch_name',
  },{
    title: '签约人力',
    dataIndex: '112000',
    key: '112000'
  },{
    title: 'T50人力',
    dataIndex: '113000',
    key: '113000'
  },{
    title: '参会人力',
    dataIndex: '116000',
    key: '116000'
  },{
    title: '有效人力',
    dataIndex: '111000',
    key: '111000'
  }]

class CurrentSalesforce extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: {
                ['当前签约']: true,
                ['当月T50']: true,
                ['今日参会']: false,
                ['当季有效']: false,
            },
        }
    }


    componentWillMount() {
        //　设置默认参数
        this.props.dispatch({
            type: 'widgets/setParams',
            payload: {
                widgetId: 'CurrentSalesforce',
                params: {
                    indexes: ['112000', '113000', '116000', '111000'],
                    branch: this.props.user.selectedBranch,
                }
            }
        });
    }

    componentDidMount() {
        // 取控件数据
        this.props.dispatch({
            type: 'widgets/getData',
            payload: {
                widgetId: 'CurrentSalesforce',
            }
        });
    }

    // 如果参数变化重新取数

    componentWillReceiveProps(nextProps) {
        if (!nextProps.loading && (nextProps.params !== this.props.params)) {
            this.props.dispatch({
                type: 'widgets/getData',
                payload: {
                    widgetId: 'CurrentSalesforce',
                }
            });
        }
    }


    getOption() {
        let fonts = (this.props.type === 'Mobile') ? 9 : 12;
        //this.props.data
        const dataAxis = [];
        const signedSF = [];
        const t50 = [];
        const attendSF = [];
        const standardSF = [];

        

        if (this.props.data) {
            for (let d of this.props.data) {
                Object.keys(d).forEach((key, index) => {

                    if (key == '112000') {
                        signedSF.push(d[key])
                        dataAxis.push(d.branch_name)
                    }
                    else if (key == '113000')
                        t50.push(d[key])
                    else if (key == '116000')
                        attendSF.push(d[key])
                    else if (key == '111000')
                        standardSF.push(d[key])
                }
                )
            }
        }

        /*var dataAxis = ['西安', '咸阳', '宝鸡', '渭南', '铜川', '榆林', '延安', '汉中', '安康', '商洛'];
        var signedSF = [8255, 5666, 3000, 4434, 590, 3666, 1000, 1320, 1523, 1025];
        var t50 = [8255, 5666, 3000, 4434, 590, 3666, 1000, 1320, 1523, 1025];
        var attendSF = [8255, 5666, 3000, 4434, 590, 3666, 1000, 1320, 1523, 1025];
        var standardSF = [8255, 5666, 3000, 4434, 590, 3666, 1000, 1320, 1523, 1025];*/

        return {
            grid: {
                left: '-6%',
                right: '3%',
                bottom: '5%',
                top: '20%',
                containLabel: true
            },
            legend: {
                data: SFlegend,
                selectedMode: 'multiple',
                selected: this.state.selected,
            },
            xAxis: {
                data: dataAxis,
                axisLabel: {
                    interval: 0,
                    formatter: function (params) {
                        return params.split("").join("\n");
                    },
                    //rotate: -30,
                    //inside: true,
                    textStyle: {
                        color: '#000'
                    }
                },
                /*axisTick: {
                    show: false
                },*/
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
				show:false,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#999',
                        fontSize: fonts
                    },
                    margin:2,
                    align:'left'
                }
            },
            series: [
                {
                    name: '当前签约',
                    type: 'bar',
                    barMaxWidth: 20,
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontSize: fonts
                            }
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [
                                    { offset: 0, color: '#99BDF9' },
                                    { offset: 1, color: '#4285F4' }
                                ])
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [
                                    { offset: 0, color: '#4285F4' },
                                    { offset: 1, color: '#99BDF9' }
                                ])
                        }
                    },
                    data: signedSF
                },
                {
                    name: '当月T50',
                    type: 'bar',
                    barMaxWidth: 25,
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontSize: fonts
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [
                                    { offset: 0, color: '#c2efa9' },
                                    { offset: 1, color: '#7ecf51' }
                                ])
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [
                                    { offset: 0, color: '#7ecf51' },
                                    { offset: 1, color: '#c2efa9' }
                                ])
                        }
                    },
                    data: t50
                },
                {
                    name: '今日参会',
                    type: 'bar',
                    barMaxWidth: 25,
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontSize: fonts
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [
                                    { offset: 0, color: '#f9e7ae' },
                                    { offset: 1, color: '#eecb5f' }
                                ])
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [
                                    { offset: 0, color: '#eecb5f' },
                                    { offset: 1, color: '#f9e7ae' }
                                ])
                        }
                    },
                    data: attendSF
                },
                {
                    name: '当季有效',
                    type: 'bar',
                    barMaxWidth: 25,
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontSize: fonts
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [
                                    { offset: 0, color: '#f3b5ac' },
                                    { offset: 1, color: '#e16757' }
                                ])
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [
                                    { offset: 0, color: '#e16757' },
                                    { offset: 1, color: '#f3b5ac' }
                                ])
                        }
                    },
                    data: standardSF
                }
            ]
        };
    }
    onChartClick(e) {

    }
    onLegendSelectChanged(e) {
        for (var i = 0; i < SFlegend.length; i++)
            e.selected[SFlegend[i]] = false
        e.selected[e.name] = true
        e.selected['当前签约'] = true
        this.setState({
            selected: e.selected
        });
    }

    onEvents = {
        'legendselectchanged': this.onLegendSelectChanged.bind(this)
    }
    render() {
        return (
            <Spin spinning={this.props.loading} size="large" tip="加载中...">
                <div className={styles.CurrentSalesforce}>
                    <Card>
                        {
                            <ReactEcharts
                                option={this.getOption()}
                                notMerge={true}
                                style={{ height: '300px', width: '100%' }}
                                lazyUpdate={true}
                                onEvents={this.onEvents}
                            />
                        }
                        {
                        this.props.data &&this.props.type==='Mobile'&&
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Table
                                columns={columns}
                                dataSource={this.props.data}
                                pagination={false}
                                rowKey="branch_name"
                                size="small"
                                bordered
                                scroll={this.props.scroll}
                            />
                        </Col>
                    }
                    </Card>
                </div>
            </Spin>
        )
    }
}
CurrentSalesforce.propTypes = {
    location: PropTypes.object,
    dispatch: PropTypes.func,
}
export default connect(({ global, widgets, user }, { type }) => ({
    global,
    user,
    type,
    params: widgets.params.CurrentSalesforce,
    data: widgets.data.CurrentSalesforce,
    loading: widgets.loading.CurrentSalesforce,
}))(CurrentSalesforce)