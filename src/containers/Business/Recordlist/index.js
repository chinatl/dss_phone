import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import { NavBar ,Icon,Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import Style from './index.css'
import { browserHistory } from 'react-router';

//导入3个切换页面
import RecordHead from '../../../components/Phone/RecordHead';
import Report from '../../../components/Report';

class lastupdtime extends Component {
	getData(){
		if(this.props.data === undefined){
			
		}else {
			return this.props.data['666201']
		}
	}
	componentWillMount() {
		this.props.dispatch({
		  type: 'widgets/setParams',
		  payload: {
			widgetId: 'lastupdtime',
			params: {
				"index_code": ["015000","666201"]
			}
		  }
		});
    }
  componentDidMount() {
    // 取控件数据
    this.props.dispatch({
      type: 'widgets/getData',
      payload: {
        widgetId: 'lastupdtime'
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading && (nextProps.params !== this.props.params)) {
      this.props.dispatch({
        type: 'widgets/getData',
        payload: {
          widgetId: 'lastupdtime'
        }
      });
    }
  }
  render() {
    return (
        <div> 
			<div style={{backgroundColor:'#fff',fontSize:'.24rem',padding:'10px'}}><Link to='/business' style={{color:'#aaa'}}>&lt;返回</Link></div>
           	<div>
			<RecordHead></RecordHead>
           	</div>
			<div style={{height:'25px',backgroundColor:'#eee',marginLeft:'10px'}}>数据更新时间({this.props.data && this.props.data["015000"]})</div>		
            <div className={Style.container}>
				
				<div ref='div1'>
					<Report 
					code="policycounttable" 
					defaultParams={{branch:"610000"}} 
					drillLevel={['P']} 
					scroll={{x:320}}
					/>
				</div>
				
			</div>		
      </div>
    );
  }
}
lastupdtime.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ user, widgets }) => ({
  user: user,
  params: widgets.params.lastupdtime,
  data: widgets.data.lastupdtime,
  loading: widgets.loading.lastupdtime,
}))(lastupdtime)




