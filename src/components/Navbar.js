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
      toggleOnClick: false,
      query: ''
    };
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
            <Link className="nav_main_link" to="#">VitalVoice</Link>
            <div className="options_container" id="navbarSupportedContent">

              <ul className="options_ul">
                <li className="options_ul"><Link className="nav_link" to="/">general</Link></li>
                <li className="options_ul"><Link className="nav_link" to="/business">business</Link></li>
                <li className="options_ul"><Link className="nav_link" to="/entertainment">entertainment</Link></li>
                <li className="options_ul"><Link className="nav_link" to="/health">health</Link></li>
                <li className="options_ul"><Link className="nav_link" to="/science">science</Link></li>
                <li className="options_ul"><Link className="nav_link" to="/sports">sports</Link></li>
                <li className="options_ul"><Link className="nav_link" to="/technology">technology</Link></li>
              </ul>


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
