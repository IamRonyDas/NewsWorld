import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import New from "./components/New";
import LoadingBar from "react-top-loading-bar";    
export default class App extends Component {
  state={
    progress:0 
  }
  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  render(){
  return (
    <>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress = {this.state.progress} 
        height={3}
      />
      <Routes>
        <Route  exact path="/" element={<New key="general"  pagesize={6} country="in" category="general"/>}/>
        <Route exact path="/Kharichacha"  element={ <New setProgress = {this.setProgress}key="general" pagesize={6} country="in" category="general" />}/>
        <Route exact  path="/business" element={  <New setProgress = {this.setProgress}key="business" pagesize={6} country="in" category="business" />}/>
        <Route exact  path="/entertainment" element={<New setProgress = {this.setProgress}key="entertainment"  pagesize={6} country="in" category="entertainment"/>}/>
        <Route exact path="/health"  element={ <New setProgress = {this.setProgress} key="health" pagesize={6} country="in" category="health" /> }/>
        <Route exact path="/science" element={  <New setProgress = {this.setProgress} key="science" pagesize={6} country="in" category="science" /> } />
        <Route exact path="/sports" element={  <New setProgress = {this.setProgress} key="sports" pagesize={6} country="in" category="sports" /> } />
        <Route exact path="/technology" element={   <New  setProgress = {this.setProgress} key="technology" pagesize={6} country="in" category="technology"  /> }/>
      </Routes>
      </>
  );
  }
};
