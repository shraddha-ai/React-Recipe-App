import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Searchbar from "./components/SearchBar";
import RecipeLists from "./components/RecipeList";
import Logo from "./img/chef.svg";
import uniqid from "uniqid";

class App extends React.Component {
  state = { recipe: [], selectedItem: undefined };

  onSearchSubmit = async term => {
    const APP_ID = "8bc6b0aa";
    const APP_KEY = "e408de30c2a978c23f0cde35164e40eb";
    const response = await axios(
      `https://api.edamam.com/search?q=${term}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // console.log(response.data.hits);
    this.setState({ recipe: response.data.hits });
  };

  handleClearSelectedItem = () => {
    this.setState(() => ({ selectedItem: undefined }));
  };

  onClick = () => {
    this.setState(() => ({
      selectedOption: Boolean(this.state.recipe.length)
    }));
  };
  render() {
    // console.log(this.state);
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <h1>
          <img src={Logo} alt="" style={{ height: "50px", margin: "-4px" }} />
          Recipe App
        </h1>
        <Searchbar onSubmit={this.onSearchSubmit}></Searchbar>
        {this.state.recipe.length ? (
          <div style={{ textAlign: "center" }}>
            Results Found :{this.state.recipe.length}
          </div>
        ) : (
          ""
        )}
        <br />
        <div className="ui grid">
          <div className="four column row">
            {this.state.recipe.map(recipe => (
              <RecipeLists
                key={uniqid()}
                onClick={this.onClick}
                title={recipe.recipe.label}
                dietLabels={recipe.recipe.dietLabels}
                source={recipe.recipe.source}
                nutrients={recipe.recipe.totalNutrients}
                colories={recipe.recipe.calories}
                ingredients={recipe.recipe.ingredientLines}
                image={recipe.recipe.image}
                totalTime={recipe.recipe.totalTime}
                totalWeight={recipe.recipe.totalWeight}
                selectedOption={this.state.selectedItem}
                handleClearSelectedItem={this.handleClearSelectedItem}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
