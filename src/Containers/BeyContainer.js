import React from "react";
import BeyCard from '../Components/BeyCard'




class BeyContainer extends React.Component {


  renderBey = () => {
    
    return this.props.api.map(bey => <BeyCard key={bey.id} bey={bey} clickHandler={this.props.clickHandler}/>)
  }

  render() {
    // console.log(this.props.api)
    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderBey()}
      </div>
    );
  }
}

export default BeyContainer;
