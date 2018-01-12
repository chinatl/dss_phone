import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import MainLayout from './components/Layout/MainLayout';

class App extends Component {

  render() {
    return (
		<div style={{maxWidth:'768px',margin:'0 auto'}}>
		  <MainLayout location={this.props.location}>
			{this.props.children}
		  </MainLayout>
		</div>	
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  collapsed: PropTypes.bool,
}

export default connect(({ }, {location}) => ({
  location,
}))(App)