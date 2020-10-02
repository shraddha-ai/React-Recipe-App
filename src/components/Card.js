import React from "react";

class Card extends React.Component {
  render() {
    console.log(this.props);
    this.ingredient = this.props.ingredients.map(ingredient => (
      <li>{ingredient}</li>
    ));
    this.nutrient = Object.keys(this.props.nutrients).map(nutrient => (
      <li>
        {this.props.nutrients[nutrient].label}:{" "}
        {this.props.nutrients[nutrient].quantity.toFixed(2)}{" "}
        {this.props.nutrients[nutrient].unit}
      </li>
    ));
    return (
      <div className="ui container">
        <h2
          className="header ui center aligned"
          style={{ paddingBottom: "20px" }}
        >
          {this.props.title}
        </h2>
        <div className="ui grid">
          <div className="seven wide column" style={{ paddingLeft: "65px" }}>
            <div className="ui image">
              <img src={this.props.image} alt={this.props.title}></img>
              <div style={{ padding: "20px 0px" }}>
                <div>
                  <b>Time to prepare :</b>{" "}
                  {(this.props.totalTime / 60).toFixed(2)} Hours
                </div>
                <div>
                  <b>Calories :</b> {(this.props.totalWeight / 1000).toFixed(2)}{" "}
                  Kcal
                </div>
                <div>
                  <b>Diet Labels :</b> {this.props.dietLabels}
                </div>
                <div>
                  Recipe by <b>{this.props.source}</b>
                </div>
              </div>
            </div>
          </div>
          <div className="eight wide column">
            <div className="description">
              <div style={{ paddingBottom: "10px" }}>
                <h5>Ingredients :</h5>
                {this.ingredient}
              </div>
              <div style={{ paddingBottom: "10px" }}>
                <h5>Nutrients :</h5>
                {this.nutrient}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
