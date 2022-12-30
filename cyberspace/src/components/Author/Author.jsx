import { Avatar, Divider } from 'antd'
import './Author.css'
import React from 'react'
import headImage from '../../static/images/naruto.jpg'
import vx from '../../static/images/微信.png'
import qq from '../../static/images/qq.png'
import csdn from '../../static/images/csdn.png'
import github from '../../static/images/github.png'
import dy from '../../static/images/抖音.png'
export default function Author() {
    return (
        <div className='author-div comm-box'>
            <div><Avatar size={120} src={headImage} /></div>
            <div className='author-introduction'>If you only do what you can do, you will never be more than you are now.
            </div>
            <Divider>社交账号</Divider>
            <Avatar src={vx} size={30} className='account' />
            <Avatar src={qq} size={30} className='account' />
            <Avatar src={github} size={30} className='account' />
            <Avatar src={csdn} size={30} className='account' />
            <Avatar src={dy} size={30} className='account' />
        </div>
    )
}
