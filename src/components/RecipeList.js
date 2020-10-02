import React from "react";
import Modal from "react-modal";
import Card from "./Card";

class RecipeLists extends React.Component {
  constructor() {
    super();
    this.state = { modalIsOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.customStyles = {
      content: {
        width: "70%",
        margin: "auto"
      }
    };
  }
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div
        className="column"
        style={{ marginBottom: "10px" }}
        onClick={this.openModal}
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
              {/* <button className="fluid ui teal button" onClick={this.openModal}>
                Show More
              </button> */}
            </div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="Selected Item"
              style={this.customStyles}
              ariaHideApp={false}
            >
              <Card
                title={this.props.title}
                source={this.props.source}
                nutrients={this.props.nutrients}
                colories={this.props.calories}
                image={this.props.image}
                dietLabels={this.props.dietLabels}
                totalTime={this.props.totalTime}
                totalWeight={this.props.totalWeight}
                ingredients={this.props.ingredients}
              ></Card>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeLists;
