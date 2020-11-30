import React, { Component } from "react";
import BeyCard from "../Components/BeyCard";

export default class Favorites extends Component {

  renderFavs = () => {
    return this.props.api.map(bey => <BeyCard key={bey.id} bey={bey} clickHandler={this.props.clickHandler}/>)
  }

  render() {
    console.log(this.props)
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.renderFavs()}
      </div>
    );
  }
}
