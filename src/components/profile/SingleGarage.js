import React, { Component } from "react";
import { Link } from "react-router-dom";

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

  componentDidMount() {
    this.setCurrentGarage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.garageId !== this.props.garageId) {
      this.setCurrentGarage();
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
