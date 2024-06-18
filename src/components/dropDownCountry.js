import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import React, { Component } from 'react';

export class DropDownCountry extends Component {
  render() {
    return (
      <ul className="dropDownOptions">
        <li className="nav-item-country active">
            <Link className="nav-dropDown-link" to="/usa">usa</Link>
        </li>
        <li className="nav-item-country active">
            <Link className="nav-dropDown-link" to="/nz">nz</Link>
        </li>
        <li className="nav-item-country active">
            <Link className="nav-dropDown-link" to="/hu">hu</Link>
        </li>
      </ul>
    )
  }
}

export default DropDownCountry