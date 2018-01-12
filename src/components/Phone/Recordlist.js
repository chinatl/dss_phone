import React, { Component } from 'react';
import echarts from 'echarts'; 
import ReactEcharts from 'echarts-for-react';
const data =  ["西安","铜川","宝鸡","咸阳","渭南","汉中","延安","安康","商洛","榆林"]
const option = {
  grid: {
        top: '10%',
        left: '8%',
        right: '6%',
        bottom: '15%',
    },
	
    xAxis :{
            show:true,
             axisLabel: {
                 //inside: true,
                 textStyle: {
                     color: '#000'
                 },
                 interval: 0,
                 formatter: function (params) {
                     return params.split("").join("\n");
                 }
             },
            axisTick: {
                show: false
            },
            axisLine: {
                // show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#241669', //21005B
                    width: 2,
                }
            },
            data : data,
        },
    yAxis  : {
            show: true,
            splitNumber:5,
            axisLine: {
                show: true
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: '#ccc'
                }
            },
         splitLine: {
                show: true,
                lineStyle: {
                    color: '#ccc', //21005B
                    width: 1,
                }
            },
        },
    series : [
        {
            type:'bar',
            itemStyle: {
                normal: {
                    color: 'rgb(244, 90, 82)'
                }
            },
             barCategoryGap: '40%',
            data:[120, 132, 101, 134, 90, 210, 134, 90, 230, 210]
        }
    ]
};
export default class Recordlist extends Component {
    render(){
        return (
        <div>
           <ReactEcharts
              option={option}
              notMerge
              lazyUpdate
              style={{ height: '250px', width: '5.8rem',margin:'0 auto' }}
            />
        </div>
      )  
    }

}




