import React from "react";
import "./App.css";
import BeyContainer from "./Containers/BeyContainer"
import api from './api'
import Favorites from "./Containers/Favorites";

class App extends React.Component {
  state = {
    api
  }

  favBey = (id) => {
    let newArray = [...this.state.api];
    let target = newArray.find(bey => bey.id === id)
    target.favorite = true;
    this.setState({api:newArray})
    
  }

  notFavBey = (id) => {
    let newArray = [...this.state.api];
    let target = newArray.find(bey => bey.id === id)
    target.favorite = false;
    this.setState({api:newArray})
    window.alert("Lemons")
  }

  findAllFavs = () => {
    return this.state.api.filter(bey => bey.favorite === true); //why dont you need to put === true
  }

  render(){
    return (
      <div className="container" >
        <BeyContainer api={this.state.api} clickHandler={this.favBey}/>
        <Favorites api={this.findAllFavs()} clickHandler={this.notFavBey}/>

      </div>
    );
};
}

export default App;
