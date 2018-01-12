import React, { Component } from 'react';
import {Link} from 'react-router'
import Style from './Business.css'

//导入3个切换页面

import opendoor2018 from './../assets/images/2018.svg'
import target from './../assets/images/target.svg'
import premtoday from './../assets/images/premtoday.svg'
import premtrend from './../assets/images/premtrend.svg'
import rank from './../assets/images/rank.svg'
import Tablebar from '../components/Phone/Tablebar';
import Iframe from '../components/Common/Iframe.js'
import Common from '../components/Common'


/*导入当日录单图片*/

const url = '';
class Business extends Component {
  handleChange1(e){
      var x1 = this.refs.gexian;
	  if(x1.style.display === 'block' && this.refs.icon1.className  ===  Style.bottom){
		  x1.style.display = 'none';
		  this.refs.icon1.className = Style.left;
	  }else if(x1.style.display === 'none' && this.refs.icon1.className  ===  Style.left){
		  x1.style.display = 'block';
		  this.refs.icon1.className = Style.bottom;
	  }
  }
  handleChange2(e){
      var x1 = this.refs.tuanxian;
	  if(x1.style.display === 'block' && this.refs.icon2.className  ===  Style.bottom){
		  x1.style.display = 'none';
		  this.refs.icon2.className = Style.left;
	  }else if(x1.style.display === 'none' && this.refs.icon2.className  ===  Style.left){
		  x1.style.display = 'block';
		  this.refs.icon2.className = Style.bottom;
	  }
  }
  render() {
    return (
        <div style={{paddingBottom:'.95rem'}}> 
			<div style={{padding:'10px',font:'normal bold .28rem "微软雅黑"',color:'rgb(241, 82, 70)',backgroundColor:'#F5F5F9'}}>2018开门红</div>
            <ul className={Style.item}>
				<li>
                    <Link to="/openred">
                        <img src={opendoor2018} alt=""/> 
                        <span>目标预算</span>
                    </Link>
                </li> 
                <li>
                    <Link to="/recordlist">
                         <img src={premtoday} alt=""/> 
                        <span>当日录单</span>
                   </Link>
                </li>   
                <li>
                    <Link to="/platform">
                         <img src={premtrend} alt=""/> 
                        <span>保费平台</span>
                   </Link>
                </li> 
            </ul> 
			<div style={{padding:'10px',font:'normal bold .28rem "微软雅黑"',backgroundColor:'#F5F5F9'}}>当日录单</div>
            <ul className={Style.item}>
				<li>
					<Link to={{pathname:'/gep'}}>
                        <img  src={require('../assets/images/today/个险当日录单.png')} alt=""/> 
                        <span>个险当日录单</span>
				   </Link>
                </li> 
				<li>
					<Link to={{pathname:'/yinp'}}>
                        <img  src={require('../assets/images/today/银保当日录单.png')} alt=""/> 
                        <span>银保当日录单</span>
				   </Link>
                </li>
				<li>
					<Link to={{pathname:'/test',state:{code:"415"}}}>
                        <img  src={require('../assets/images/today/团险当日录单.png')} alt=""/> 
                        <span>团险当日录单</span>
				   </Link>
                </li>
            </ul>  
			<div style={{padding:'10px',font:'normal bold .28rem "微软雅黑"',backgroundColor:'#F5F5F9'}}>业务快报</div>
            <ul className={Style.item}>
				<li>
					<Link to={{pathname:'/test',state:{code:"416",width:'370'}}}>
                        <img  src={require('../assets/images/yewu/个险业务快报.png')} alt=""/> 
                        <span>个险业务快报</span>
				   </Link>
                </li>
				<li>
					<Link to={{pathname:'/test',state:{code:"418",width:'370'}}}>
                        <img  src={require('../assets/images/yewu/银保业务快报.png')} alt=""/> 
                        <span>银保业务快报</span>
				   </Link>
                </li>
				<li>
					<Link to={{pathname:'/test',state:{code:"421"}}}>
                        <img  src={require('../assets/images/yewu/短期险业务快报.png')} alt=""/> 
                        <span>短险业务快报</span>
				   </Link>
                </li>
			</ul>
			<div style={{padding:'10px',font:'normal bold .28rem "微软雅黑"',backgroundColor:'#F5F5F9'}} onClick={()=>this.handleChange1()} className={Style.normalItem}>个险分析 <span className={Style.left} ref='icon1'></span></div>
            <ul className={Style.item}>
				<li>
                    <Link to={{pathname:'/newpage',state:url+'/webpages/agentp_m4.aspx'}}>
						<img src={require('../assets/images/gexian/个险业务快报.png')} alt=""/> 
                        <span>个险业务快报</span>
					</Link>
                </li> 
				
				<li>
                    <Link to={{pathname:'/newpage',state:url+'/webpages/agentp_m5.aspx'}}>	
						<img src={require('../assets/images/gexian/个险业务进度.png')} alt=""/> 
                        <span>个险业务进度</span>
					</Link>
                </li> 
                <li>
                    <Link to={{pathname:'/newpage',state:url+'/webpages/agentp_m10.aspx'}}>
						<img src={require('../assets/images/gexian/队伍建设考核.png')} alt=""/> 
                        <span>队伍建设考核</span>
					</Link>
                </li> 
                <li>
                    <Link to={{pathname:'/newpage',state:url+'/webpages/agentp_m19.aspx'}}>
						<img src={require('../assets/images/gexian/国寿福专项统计.png')} alt=""/> 
                        <span>国寿福专项统计</span>
					</Link>
                </li> 
			</ul>
				<ul ref='gexian' style={{display:'none'}} className={Style.item}>

				<li>
					<Link to={{pathname:'/newpage',state:url+'/webpages/agentp_m18.aspx'}}>
                        <img  src={require('../assets/images/gexian/季度关键指标.png')} alt=""/> 
                        <span>季度关键指标</span>
				   </Link>
                </li>
				<li>
                    <Link to={{pathname:'/newpage',state:url+'/webpages/agentp_m9.aspx'}}>
						<img src={require('../assets/images/gexian/举绩情况追踪.png')} alt=""/> 
                        <span>举绩情况追踪</span>
					</Link>
                </li> 
				<li>
                    <Link to={{pathname:'/newpage',state:url+'/webpages/agentp_m7.aspx'}}>
						<img src={require('../assets/images/gexian/考核预警达标.png')} alt=""/> 
                        <span>考核预警达标</span>
					</Link>
                </li> 
				<li>
                    <Link to={{pathname:'/newpage',state:url+'/webpages/agentp_m81.aspx'}}>
						<img src={require('../assets/images/gexian/扫码参会.png')} alt=""/> 
                        <span>扫码参会</span>
					</Link>
                </li> 
				<li>
                    <Link to={{pathname:'/newpage',state:url+'/webpages/agentp_m11.aspx'}}>
						<img src={require('../assets/images/gexian/分平台业务.png')} alt=""/> 
                        <span>分平台业务</span>
					</Link>
                </li> 
				<li>
                    <Link to={{pathname:'/newpage',state:url+'/webpages/agentp_m12.aspx'}}>
						<img src={require('../assets/images/gexian/城区平台.png')} alt=""/> 
                        <span>城区平台</span>
					</Link>
                </li> 
				<li>
                    <Link to={{pathname:'/newpage',state:url+'/webpages/agentp_m13.aspx'}}>
						<img src={require('../assets/images/gexian/开门红快报.png')} alt=""/> 
						<span>两乡平台</span>
					</Link>
                </li> 
				<li>
                    <Link to={{pathname:'/newpage',state:url+'/webpages/agentp_m14.aspx'}}>
						<img src={require('../assets/images/gexian/收展平台.png')} alt=""/> 
                        <span>收展平台</span>
					</Link>
                </li> 
				<li>
                    <Link to={{pathname:'/newpage',state:url+'/webpages/agentp_m15.aspx'}}>
						<img src={require('../assets/images/gexian/网销短险.png')} alt=""/> 
                        <span>网销短险</span>
					</Link>
                </li> 
				<li>
                    <Link to={{pathname:'/newpage',state:url+'/dss/bridge?id=reporteckxs'}}>
						<img src={require('../assets/images/gexian/小说会.png')} alt=""/> 
                        <span>小说会</span>
					</Link>
                </li> 
				<li>
                    <Link to={{pathname:'/newpage',state:url+'/dss/bridge?id=reporteckcustomer'}}>
						<img src={require('../assets/images/gexian/e创客获客.png')} alt=""/> 
                        <span>e创客获客</span>
					</Link>
                </li> 
            </ul> 
			<div style={{padding:'10px',font:'normal bold .28rem "微软雅黑"',backgroundColor:'#F5F5F9'}} onClick={()=>this.handleChange2()} className={Style.normalItem}>银保分析<span className={Style.left} ref='icon2'></span></div>
            <ul className={Style.item}>
				<li>
					   <Link to={{pathname:'/newpage',state:url+'/webpages/agentb_m8_date.aspx'}}>
						<img src={require('../assets/images/yinbao/开门红预约保费.png')} alt=""/> 
                        <span>开门红预约保费</span>
					</Link>
                </li> 
				<li>
					   <Link to={{pathname:'/newpage',state:url+'/webpages/agentb_m8.aspx'}}>
						<img src={require('../assets/images/yinbao/当日录单.png')} alt=""/> 
                        <span>当日录单</span>
					</Link>
                </li> 
				<li>
						  <Link to={{pathname:'/newpage',state:url+'/webpages/agentb_m7.aspx'}}>
						<img src={require('../assets/images/yinbao/业务进度.png')} alt=""/> 
                        <span>业务进度</span>
					</Link>
                </li> 
				<li>
				   <Link to={{pathname:'/newpage',state:url+'/webpages/agentb_m4.aspx'}}>
						<img src={require('../assets/images/yinbao/县支公司排名.png')} alt=""/> 
                        <span>县支公司排名</span>
					</Link>
                </li> 
			</ul>
			<ul ref='tuanxian' style={{display:'none'}} className={Style.item}>
				<li>
                    <Link to={{pathname:'/newpage',state:url+'/webpages/agentb_m10.aspx'}}>
						<img src={require('../assets/images/yinbao/规划师队伍.png')} alt=""/> 
                        <span>保规队伍</span>
					</Link>
                </li> 
				<li>
					<Link to={{pathname:'/newpage',state:url+'/webpages/agentb_m1.aspx'}}>
						<img src={require('../assets/images/yinbao/出单网点.png')} alt=""/> 
                        <span>出单网点</span>
					</Link>
                </li> 
				<li>
				   <Link to={{pathname:'/newpage',state:url+'/webpages/agentb_m2.aspx'}}>
						<img src={require('../assets/images/yinbao/举绩人力.png')} alt=""/> 
                        <span>举绩人力</span>
					</Link>
                </li> 
				<li>
					   <Link to={{pathname:'/newpage',state:url+'/webpages/agentb_m3.aspx'}}>
						<img src={require('../assets/images/yinbao/县支公司平台.png')} alt=""/> 
                        <span>县支公司平台</span>
					</Link>
                </li> 
				<li>
						<Link to={{pathname:'/newpage',state:url+'/webpages/agentb_m9.aspx'}}>
						<img src={require('../assets/images/yinbao/黄金联赛.png')} alt=""/> 
                        <span>黄金联赛</span>
					</Link>
                </li> 
				<li>
					   <Link to={{pathname:'/newpage',state:url+'/webpages/agentb_m8_datepm.aspx'}}>
						<img src={require('../assets/images/yinbao/开门红预约保费排名.png')} alt=""/> 
                        <span>开门红预约保费排名</span>
					</Link>
                </li> 
				<li>
					   <Link to={{pathname:'/newpage',state:url+'/dss/bridge?id=reportijkcustomer'}}>
						<img src={require('../assets/images/yinbao/i聚客获客.png')} alt=""/> 
                        <span>i聚客获客</span>
					</Link>
                </li>
            </ul>
      		<Tablebar type='business'></Tablebar>
      </div>
    );
  }
}
export default Business



