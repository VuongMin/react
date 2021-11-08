import React, { Component } from 'react'
import  Header_extra  from '../../components/navbar/Header_extra';
import { URI } from '../../common'
import '../../components/navbar/Navbar.css'
import { Menus } from './Menus';
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ITEMS: []
    }
  }
  componentDidMount() {
    fetch(URI.menu)
      .then(res => res.json())
      .then(res => {
        this.setState({ ITEMS: res })
      })

  }

  render() {
    return (
      <section id="sidebar-main" >
        <div className="sidebar-warp">
          <div className="logo">
            <Link to="/"><img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/store_1587022637_735.jpg" alt="" /></Link>
          </div>
          <Header_extra />
          <Menus menu={this.state.ITEMS}></Menus>
          {/* <div className="socaiol">
            <div className="social-item"> <img src="images/fb.png" alt="" /> </div>
            <div className="social-item"><img src="images/yt.png" alt="" /> </div>
            <div className="social-item"> <img src="images/zalo.png" alt="" /></div>
            <div className="social-item"> <img src="images/is.png" alt="" /></div>
          </div> */}
        </div>
      </section>
    )
  }

}
export default Navbar