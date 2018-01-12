import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { NavBar , Icon, Grid  } from 'antd-mobile';
import Style from './index.css'
import Details from './../../components/Phone/MainBoard/Details';
import Chart from '../../components/Phone/Charts';
import ajax from '../../components/Ajax';
import IndexDetails from '../../components/Phone/IndexDetails'
import PrentPolicyPount from '../../components/Phone/PrentPolicyPount'
import Present from '../../components/Phone/Present'
import ListNumber from '../../components/Phone/ListNumber'
import { Link } from 'react-router';

class lastupdtime extends Component {
	state = {
		data :[]
	};
	componentWillMount() {
		this.props.dispatch({
		  type: 'widgets/setParams',
		  payload: {
			widgetId: 'lastupdtime',
			params: {
				"index_code": ["666101","666201"]
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
  handleChange1(e){
      var x1 = this.refs.myTextInput1;
      var x2 = this.refs.myTextInput2;
	  if(this.refs.icon1.className  ===  Style.bottom){
		  x1.style.height = '0';
		  this.refs.icon1.className = Style.left;
	  }else if(this.refs.icon1.className  ===  Style.left){
		  x1.style.height = '100%';
		  this.refs.icon1.className = Style.bottom;
			x2.style.height = '0';
			this.refs.icon2.className = Style.left;
	  }
      
  }
  handleChange2(){
	  var x2 = this.refs.myTextInput1;
    var x1 = this.refs.myTextInput2;
	  if(this.refs.icon2.className  ===  Style.bottom){
      x1.style.height = '0';
		  this.refs.icon2.className = Style.left;
	  }else if(this.refs.icon2.className  ===  Style.left){
		  this.refs.icon2.className = Style.bottom;
		  this.refs.icon1.className = Style.left;
      x2.style.height = '0';
      x1.style.height = '100%';
	  }
  }
  render() {
	  if(this.props.data !== undefined){
		  localStorage.setItem('settime',JSON.stringify(this.props.data['666201']))
	  }
    return (
      <div className={Style.container}>
        <div className = {Style.sheet}  onClick={()=>this.handleChange1()}>
            <div className={Style.push}>开门红团险当日录单</div>
            <div className={Style.arrow}><span className={ Style.bottom} ref='icon1'></span></div>
            <div className={Style.numer} ref='gexian1'><Present /></div>
        </div> 
        <div className={Style.charts}  ref="myTextInput1"  style={{height:'',overflow:'hidden'}}>
            <div className={Style.more}>
                <span style={{float:'left'}}>数据更新时间({this.props.data && this.props.data["666101"]})</span>    
                <Link style={{float:'right'}} to='recordlist'>更多>></Link>        
            </div> 
		  	<PrentPolicyPount indexCode="666101"/>
        </div>
        <div className = {Style.sheet} onClick={()=>this.handleChange2()}>
		 	<div className={Style.push}>开门红团险期交</div>
            <div className={Style.arrow}><span className={ Style.left} ref='icon2'></span></div>
            <div className={Style.numer}  ref='gexian2'><ListNumber /></div>
        </div> 
         <div className={Style.charts}  ref="myTextInput2" style={{height:'0',overflow:'hidden'}}>
           <div className={Style.more}>
                <span style={{float:'left'}}>数据更新时间({this.props.data && this.props.data["666201"]})</span>    
                  <Link style={{float:'right'}} to='openred'>更多>></Link>   
            </div> 
			 <IndexDetails indexCode="666201"></IndexDetails>
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



