import React from "react";
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {

    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className="card">
        <div className="pokemon-img">
        <img src={ image }></img>
        </div>
        <div className="pokemon-info">
          <div className="name">{ name }</div>
          <div className="type">{ type }</div>
          <div className="average-weight">Average weight: { averageWeight.value } Kg</div>
        </div>
        <img src={ image } className="pokemon-gif"></img>
      </div>
    )
  };
}

export default Pokemon;