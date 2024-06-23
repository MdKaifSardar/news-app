import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import React, { Component, useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import About from './pages/about';
import Contact from './pages/contact';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      progress: 0,
      searchTopic: 'in'
    }
  }
  setSearchTopic = (query) => {
    this.setState({searchTopic: query});
  }
  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }
  render(){
    return (
      <Router>
        <Navbar setQuery={this.setSearchTopic}/>
        <LoadingBar
        height={3}
        className="loadingBar"
        color='#f11946'
        progress={this.state.progress}
        />
        <div className='app-wrapper'>
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} searchTopicNews={this.state.searchTopic} key="general" pageSize={6} category="general"/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/contact" element={<Contact/>}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} searchTopicNews={this.state.searchTopic} key="business" pageSize={6} category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} searchTopicNews={this.state.searchTopic} key="entertainment" pageSize={6} category="entertainment"/>}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} searchTopicNews={this.state.searchTopic} key="health" pageSize={6} category="health"/>}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} searchTopicNews={this.state.searchTopic} key="science" pageSize={6} category="science"/>}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} searchTopicNews={this.state.searchTopic} key="sports" pageSize={6} category="sports"/>}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} searchTopicNews={this.state.searchTopic} key="technology" pageSize={6} category="technology"/>}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}