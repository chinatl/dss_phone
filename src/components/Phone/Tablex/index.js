import React, { Component } from 'react';
import {Link} from 'react-router'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Table, Icon } from 'antd';
import Tablebar from '../../Report'
import Style from './index.css'
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
	fixed:'left'
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
		fixed:'left'

	
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
fixed:'left'

}, {
  title: 'Action',
  key: 'action',
		fixed:'left',

  render: (text, record) => (
    <span>
      <a href="#">Action 一 {record.name}</a>
      <span className="ant-divider" />
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];
class Tablex extends Component {
  	componentWillMount() {
		console.log(this.refs.uls);
		
    }
	render() {
    return (
		<div className={Style.tablebar}>
			<ul className={Style.title}>
				<li>全省</li>
				<li>西安</li>
			</ul>
			<div className={Style.container}>
				<ul ref='uls'>
					<li>姓名</li>
					<li>姓名</li>
					<li>姓名</li>
					<li>姓名</li>
					<li>姓名</li>
					<li>姓名</li>
				</ul>
			</div>
			  <Table
				columns={columns}
				dataSource={data}
				pagination={false}
				rowKey="d1"
				size="small"
				bordered
			  />
          <Tablebar></Tablebar>
		</div>
    );
  }
}

export default connect(({ global, Tablex }, { data }) => ({
  global,
  Tablex,
  data,
}))(Tablex)



