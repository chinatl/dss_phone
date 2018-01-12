import React, { Component } from 'react';
import {Link} from 'react-router'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavBar,Icon} from 'antd-mobile';
import Style from './index.css';
import { browserHistory } from 'react-router';

class Headbar extends Component {
  	componentWillMount() {
		
    }
	render() {
    return (
		<div className={Style.report}>
			<span>&lt;</span>
			<span>{this.props.title}</span>
			<span>...</span>
		</div>	
    );
  }
}

export default connect(({ global, Headbar }, { title,lastPath }) => ({
	global,
	Headbar,
  	title,
	lastPath
}))(Headbar)


