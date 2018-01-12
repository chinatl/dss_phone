import React, { Component } from 'react';
import {Link} from 'react-router'
import { connect } from 'react-redux';
import district from '../assets/data/branch.json'

import Common from '../components/Common'
const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];
export default class Test extends React.Component {
  render() {
    return (<div style={{backgroundColor:'#fff'}}>
      <div style={{backgroundColor:'#fff',fontSize:'.24rem',padding:'10px'}}><Link to='/business' style={{color:'#aaa'}}>&lt;返回</Link></div>
     	<Common code={this.props.location.state.code} width={this.props.location.state.width}/>
    </div>);
  }
}	
