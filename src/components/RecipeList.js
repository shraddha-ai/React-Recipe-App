import React from "react";

class RecipeLists extends React.Component {
  constructor() {
    super();

    this.customStyles = {
      content: {
        width: "70%",
        margin: "auto"
      }
    };
  }


  render() {
    return (
      <div
        className="column"
        style={{ marginBottom: "10px" }}
      >
        <div className="ui link cards">
          <div className="card" onClick={this.onClick}>
            <div className="image">
              <img src={this.props.image} alt={this.props.title} />
            </div>
            <div className="content">
              <div className="header">{this.props.title}</div>
              <div className="description">
                <div>
                  Total Time : {(this.props.totalTime / 60).toFixed(2)} Hours
                </div>
                <div>
                  Total Weight : {(this.props.totalWeight / 1000).toFixed(2)}{" "}
                  Kcal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeLists;
