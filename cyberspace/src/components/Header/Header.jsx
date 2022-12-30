import React, { Component } from 'react'
import './Header.css'
import { Row, Col, Menu } from 'antd'
import { HomeTwoTone, SmileTwoTone, MessageTwoTone } from '@ant-design/icons';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Row typeof='flex' justify='center'>
          {/* <Col className='header-title' xs={24} sm={24} md={10} lg={10} xl={16}> */}
          <Col className='header-title' span={7}>
          {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} 在测试
          </Col>
          {/* <Col  className='header-item'xs={0} sm={0} md={14} lg={8} xl={6}> */}
          <Col className='header-item' span={4} offset={13}>
            <Menu mode='horizontal'
              items={[
                {
                  label: '首页',
                  key:'home',
                  icon: <HomeTwoTone  style={{ fontSize: '1.1rem', color: '#37BAFB' }} />
                },
                {
                  label: '吃喝玩乐',
                  key:'cheerful',
                  icon: <SmileTwoTone style={{ fontSize: '1.1rem', color: '#fefa00' }} />
                },
                {
                  label: '关于笔者',
                  key:'me',
                  // icon: <img className='header-item-image' src={require("../../static/images/用户.png")} />
                  icon: <MessageTwoTone    style={{ fontSize: '1.1rem', color: '#4d55ff' }} />
                },
              ]}
            />
            {/* <Menu mode='horizontal'>
              <Menu.Item key='home'>
                <HomeOutlined style={{ fontSize: '1.1rem', color: '#37BAFB' }} />
                {'\u00A0'}首页
              </Menu.Item>

              <Menu.Item key='cheerful'>
                <SmileFilled style={{ fontSize: '1.1rem', color: '#ffae00' }} />
                {'\u00A0'}吃喝玩乐
              </Menu.Item>

              <Menu.Item key='me'>
                <UserOutlined style={{ fontSize: '1.1rem', color: '#000080' }} />
                {'\u00A0'}关于笔者
              </Menu.Item>
            </Menu> */}
          </Col>
        </Row>
      </div>
    )
  }
}
