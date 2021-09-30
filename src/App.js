
import React, { Component } from 'react';
import image from './project.jpg';
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
    fullName:"",bio:"",imgSrc:"",profession:"",
    show : true,
    count:0
  }}

  displayProfile = () => {
    if (this.state.show==true) {
      this.setState({fullName:"mohamed nour ben ali"})
      this.setState({bio:"born in 1991"})
      this.setState({profession:"coach"})
      this.setState({imgSrc:image})
      setInterval(()=>{
        this.setState({count : this.state.count+1})
        },1000)
    }
  }

  render() {
    const displayTime=()=>{
      if (this.state.count<60){ return this.state.count + "seconds"}
      else{
        var SS = this.state.count % 60
        var MM = parseInt((this.state.count/60)%60)
        var HH =(this.state.count/(3600)).toFixed(0)
        return `${HH} H ${MM} M ${SS} seconds `; 
      }
    }
    return (
      <div className="form">
        <h2 id="counter">{displayTime()}</h2>
        <button className="button" onClick={this.displayProfile}> TOGGLE </button>
        <div className="profile">
          <div className="data">
            <h1>{this.state.fullName}</h1>
            <h2>{this.state.bio}</h2>
            <h3>{this.state.profession}</h3>
          </div>
          <img className="image" src={this.state.imgSrc}/>
        </div>
      </div>
    )
  }
}