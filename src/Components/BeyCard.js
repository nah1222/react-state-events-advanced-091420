import React from "react";

const BeyCard = (props) => {
  let {bey, clickHandler} = props //what does this do

  const beyClickHandler = () => {
    console.log(bey)
    clickHandler(bey.id)
  }

  return (
    <div className="card">
      <img  alt="beyonce"src={bey.img} onClick={beyClickHandler}/>
      <h2>{bey.name}</h2>
      

    </div>
  );
};

export default BeyCard;
