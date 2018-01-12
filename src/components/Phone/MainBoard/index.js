import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Card, Radio, Icon, Menu, Dropdown, Alert, Tag, Button } from 'antd';
import Details from './Details';
import styles from './Details/style.css'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const indexList = {
  ['011001']: '个险期交',
  ['011010']: '个险十年期',
  ['012000']: '个险标保',
  ['021001']: '银保期交',
  ['021010']: '银保十年期',
  ['022000']: '银保标保',
  ['004000']: '短期险',
}

class MainBoard extends Component {

  componentWillMount() {
    this.props.dispatch({
      type: 'mainBoard/changeItem',
      payload: '011001',
    })
  }


  handleItemChange(e) {
	  	  console.log(e)

    if (e.target.value !== 'more') {
      this.props.dispatch({
        type: 'mainBoard/changeItem',
        payload: e.target.value
      })
    }
  }
  handleMenuClick(e) {
	  console.log(e)
    this.props.dispatch({
        type: 'mainBoard/changeItem',
        payload: e.key
    });
}
  render() {

    const { curItem } = this.props.mainBoard;
    if (this.props.type === "Web") {
      return (
        <Card
          title="预算目标"
          //bodyStyle={{height:'350px'}}
          extra={
            <div>
              <RadioGroup value={curItem} onChange={(e) => { this.handleItemChange(e) }} size="small">
                {
                  Object.keys(indexList).map((indexCode, i) =>
                    <RadioButton value={indexCode} key={i}>{indexList[indexCode]}</RadioButton>
                  )
                }
              </RadioGroup>
            </div>
          }
        >
          <Details indexCode={curItem} indexName={indexList[curItem]} type={this.props.type}/>
        </Card>
      );
    }
    else if (this.props.type === "Mobile") {
      const menu = (
        <Menu onClick={this.handleMenuClick.bind(this)}>
          {
            Object.keys(indexList).map((indexCode) => {
              return <Menu.Item key={indexCode}>{indexList[indexCode]}</Menu.Item>
            })
          }
        </Menu>
      );
      return (
        <div className={styles.charts}>
        <Card
          title="预算目标"
          //bodyStyle={{height:'350px'}}
          extra={
              <Dropdown overlay={menu}>
                <Button style={{ marginLeft: 2 }}>
                  {indexList[curItem]} <Icon type="down" />
                </Button>
              </Dropdown>
          }
        >
          <Details indexCode={curItem} indexName={indexList[curItem]} type={this.props.type} />
        </Card>
        </div>
      )
    }
  }
}

MainBoard.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ global, mainBoard }, { type,locate }) => ({
  global,
  mainBoard,
  type,
locate,
}))(MainBoard)
