import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getCarsForGarage } from "../../services/api_helper.js";

export default class SingleGarage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGarage: null
    };
  }

  setCurrentGarage = () => {
    const currentGarage = this.props.garages.find(
      garage => garage.id === parseInt(this.props.garageId)
    );
    this.setState({ currentGarage });
  };

  getCars = async id => {
    console.log(id);
    const garageToLoad = await getCarsForGarage(id);

    this.setState({
      currentGarage: garageToLoad
    });
    console.log(this.state.currentGarage);
  };

  async componentDidMount() {
    await this.setCurrentGarage();
    console.log(this.state);
  }

  componentDidUpdate(prevProps) {
    console.log(this.state, "updated");
    if (prevProps.garageId !== this.props.garageId) {
      this.setCurrentGarage();
      this.props.getCars(this.state.currentGarage.id);
    }
  }

  render() {
    return (
      <div>
        {this.state.currentGarage && (
          <>
            <h1>{this.state.currentGarage.title}</h1>
            <Link to={`/garages/${this.state.currentGarage.id}/edit`}>
              <button>Edit</button>
            </Link>
          </>
        )}
      </div>
    );
  }
}
