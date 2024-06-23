import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import '../css/navbar.css'
// import News from './News';


export class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      toggleOptions: false,
      toggleOnClick: false,
      query: ''
    };
  } 
  handleToggleOption = () => {
    this.setState({toggleOptions: !this.state.toggleOptions});
    console.log(this.state.toggleOptions);
  }
  changeOnClick = (param) => {
    this.setState({toggleOnClick: !param});
    console.log(param);
  }
  handleOnChange = (event) => {
    this.setState({query: event.target.value});
  }
  handleOnSearchBtnClk = () => {
    this.props.setQuery(this.state.query);
  }
  render() {
    return (
        <nav className="navbar_main_container">

          <div className='top_nav'>
            <div className='logo_title_box'>
              <div className='VV_logo' />
              <Link className="nav_main_link" to="#">VitalVoice</Link>
            </div>
            <div className='link_pages_container'>
              <Link className='link_pages' to='/about'>About</Link>
              <Link className='link_pages' to='/Contact Us'>Contact</Link>
            </div>
          </div>

            <div className="options_container" id="navbarSupportedContent">

              <ul className="options_ul">
                <li><Link className="nav_link" to="/">general</Link></li>
                <li><Link className="nav_link" to="/business">business</Link></li>
                <li><Link className="nav_link" to="/entertainment">entertainment</Link></li>
                <li><Link className="nav_link" to="/health">health</Link></li>
                <li><Link className="nav_link" to="/science">science</Link></li>
                <li><Link className="nav_link" to="/sports">sports</Link></li>
                <li><Link className="nav_link" to="/technology">technology</Link></li>
              </ul>

              <div className='options_list'>
                <div className='option_btn' onClick={this.handleToggleOption}>
                  <i className="menu_icon fa-solid fa-bars"></i>
                </div>
                <ul className={`${this.state.toggleOptions?'open_navbar_options':'closed_navbar_options'}`}>
                  <li><Link className="nav_link_new" to="/">general</Link></li>
                  <li><Link className="nav_link_new" to="/business">business</Link></li>
                  <li><Link className="nav_link_new" to="/entertainment">entertainment</Link></li>
                  <li><Link className="nav_link_new" to="/health">health</Link></li>
                  <li><Link className="nav_link_new" to="/science">science</Link></li>
                  <li><Link className="nav_link_new" to="/sports">sports</Link></li>
                  <li><Link className="nav_link_new" to="/technology">technology</Link></li>
                </ul>
              </div>


              <div className="searchbar_navbar">
                <input
                className='input_searchbar'
                value={this.state.query}
                onChange={this.handleOnChange}
                placeholder="Search Country"
                type="text"/>

                <div className="search_button_navbar" onClick={this.handleOnSearchBtnClk}>Search</div>
              </div>
            </div>
            </nav>
    )
  }
}

export default Navbar
