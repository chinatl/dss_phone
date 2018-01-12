import React, { Component } from 'react';
import {Link} from 'react-router'
import Style from './Newpage.css'

//导入3个切换页面

import Tablebar from '../components/Phone/Tablebar';
//import Iframe from '../components/Common/Iframe'
var height = window.screen.availHeight;


/*导入当日录单图片*/

class Newpage extends Component {

  render() {
    return (
        <div> 
			<div style={{fontSize:'.32rem',padding:'10px'}}><Link to='/business' style={{color:'#aaa',position:'fixed',top:0,zIndex:'10'}}>&lt;返回</Link></div>
			<iframe src={this.props.location.state} frameborder="0" className={Style.newpage} style={{height:height+'px'}}name='newpage'></iframe>
		</div>
    );
  }
}
export default Newpage
