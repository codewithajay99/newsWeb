import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import { Component } from "react";
export default  class App extends Component {
  constructor(){
    super()
    this.state={
      language:"hi",
      search:""
    }
  }
  getLanguage=(input)=>{
this.setState({language:input})
  }
  search=(input)=>{
    this.setState({search:input})
  }
  render(){
  return (
    <>
      <BrowserRouter basename="/newsWeb">
        <Navbar getLanguage={this.getLanguage} search={this.search}/>

        <Routes>
          <Route path="/" element={<Home language={this.state.language} q={this.state.search?this.state.search:"All"} />} />
          <Route path="/Politics" element={<Home language={this.state.language} q={this.state.search?this.state.search:"Politics"} />} />
          <Route path="/Crime" element={<Home language={this.state.language} q={this.state.search?this.state.search:"Crime"} />} />
          <Route path="/Education" element={<Home language={this.state.language} q={this.state.search?this.state.search:"Education"} />} />
          <Route path="/Science" element={<Home language={this.state.language} q={this.state.search?this.state.search:"Science"} />} />
          <Route path="/Techonology" element={<Home language={this.state.language} q={this.state.search?this.state.search:"Techonology"} />} />
          <Route path="/Sport" element={<Home language={this.state.language} q={this.state.search?this.state.search:"Sport"} />} />
          <Route path="/Cricket" element={<Home language={this.state.language} q={this.state.search?this.state.search:"Cricket"} />} />
          <Route path="/Entertainment" element={<Home language={this.state.language} q={this.state.search?this.state.search:"Entertainment"} />} />
          <Route path="/Economics" element={<Home language={this.state.language} q={this.state.search?this.state.search:"Economics"} />} />
          <Route path="/World" element={<Home language={this.state.language} q={this.state.search?this.state.search:"World"} />} />
          <Route path="/India" element={<Home language={this.state.language} q={this.state.search?this.state.search:"India"} />} />
          <Route path="/Jokes" element={<Home language={this.state.language} q={this.state.search?this.state.search:"Jokes"} />} />
          <Route path="/MahaKumbh" element={<Home language={this.state.language} q={this.state.search?this.state.search:"MahaKumbh"} />} />
          

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}
}
