import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout, BackTop, Spin } from 'antd';
import HeaderContent from './HeaderContent';
import SiderContent from './SiderContent';
import styles from './MainLayout.css';
import classNames from 'classnames';

const { Header, Content, Sider, Footer } = Layout;
const Style = {
	maxWidth:'768px',
	margin:'0 auto'
}
class MainLayout extends Component {
  render() {
    return(
		<div style={Style}>
			<Content>
			  {this.props.children}
			</Content>
		</div>	
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  collapsed: PropTypes.bool,
}

export default connect(({ global },{location}) => ({
  collapsed: global.collapsed,
  location,
}))(MainLayout)
