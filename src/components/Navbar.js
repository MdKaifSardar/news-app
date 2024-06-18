import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <Link className="navbar-brand" to="/">VitalVoice</Link> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">home</li>
                {/* <li className="nav-item active"><Link className="nav-link" to="/">general</Link></li> */}
                {/* <li className="nav-item active"><Link className="nav-link" to="/business">business</Link></li>
                <li className="nav-item active"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
                <li className="nav-item active"><Link className="nav-link" to="/health">health</Link></li>
                <li className="nav-item active"><Link className="nav-link" to="/science">science</Link></li>
                <li className="nav-item active"><Link className="nav-link" to="/sports">sports</Link></li>
                <li className="nav-item active"><Link className="nav-link" to="/technology">technology</Link></li> */}
              </ul>


              <div className="searchbar">
                <input
                value={this.state.query}
                onChange={this.handleOnChange}
                placeholder="Search Country"
                type="text"/>

                <button className="searchButton" onClick={this.handleOnSearchBtnClk}>Search</button>
              </div>


                {/* <button className="country-div" onClick={() => this.changeOnClick(this.state.toggleOnClick)}>
                  Countries
                  {
                    this.state.toggleOnClick && <DropDownCountry/>
                  }
                </button> */}
            </div>
            </nav>
    )
  }
}

export default Navbar
