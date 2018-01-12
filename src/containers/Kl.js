import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Row, Col } from 'antd';
import IndexList from '../components/Phone/IndexList';
import KLine from '../components/Phone/KLine';

import Tablebar from '../components/Phone/Tablebar';

//导入3个切换页面
class Kl extends Component {
	  
componentWillMount() {
	
}
render() {
    return (
        <div style={{paddingBottom:'.9rem'}}> 
			<Row>
			  <Col xs={24} sm={24} md={4} lg={4} xl={4}><IndexList type={''}/></Col>
			  <Col xs={24} sm={24} md={20} lg={20} xl={20} style={{backgroundColor:'#2c343c'}}><KLine theme={'dark'}/></Col>
			</Row>
      		<Tablebar type='kl'></Tablebar>
      </div>
    );
  }
}
Kl.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ },{location,type}) => ({
  location,
  type
}))(Kl)









