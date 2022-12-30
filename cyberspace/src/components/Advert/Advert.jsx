import React from 'react'
import './Advert.css'
import eat from '../../static/images/eat.jpg'
export default function Advert() {
  return (
    <div className='ad-div comm-box'>
        <div><img src={eat} alt="1" width='100%'></img></div>
        <div><img src={require("../../static/images/drink.jpg")} alt="1" width='100%'/></div>
        <div><img src={require("../../static/images/play.jpg")} alt="1" width='100%'/></div>
        <div><img src={require("../../static/images/happy.jpg")} alt="1" width='100%'/></div>
    </div>
  )
}
