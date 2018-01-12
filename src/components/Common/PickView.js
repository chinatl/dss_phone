import React, { Component } from 'react';
import { Picker,List} from 'antd-mobile';
import {Icon} from 'antd';
import arrayTreeFilter from 'array-tree-filter';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import district from '../../assets/data/Province.json'
import src from '../../assets/images/pickview.png'
import Style from './index.css'
import { Cascader } from 'antd';

class BranchSelect extends Component {
	state = {
		jigou: '省公司',
		visible:false
	}
	onChange = (value, selectedOptions) => {
	  if(selectedOptions.length !== 0){
		var num = selectedOptions[0].key;
		this.setState({
			jigou:selectedOptions[0].label
		})
		this.props.dispatch({type:'user/selectBranch',payload:{branch: num}});
	  }
	}
	pickCity(){
		 this.setState({ visible: true })
	}
  	render() {
		return ( 
		  <div >
		  	<div style={{position:'absolute','top':'2px','right':'2px',zIndex:'30','overflow':'hidden','height':'22px','marginTop':'-4px'}} onClick={() =>this.pickCity()}>
			  	<span style={{color:'#fff',fontSize:'.24rem',verticalAlign:'top',float:'left'}} >选择机构:{this.state.jigou}</span>	
				<img src={src} alt=""
				 style={{width:'20px',float:'left','marginTop':'2PX'}}
				 / >
			 </div>
			 <div className={Style.pickview}>
				<Cascader options={district} onChange={this.onChange} style={{width: '110px',position:'absolute','top':'-4px','right':'2px',zIndex:'31',opacity:0}} >
				</Cascader>
			 </div>
		</div>
		);
  }
}
BranchSelect.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ user, dataCache }) => ({
  branchList: dataCache.branchList,
  selectedBranch: user.selectedBranch,
}))(BranchSelect)

