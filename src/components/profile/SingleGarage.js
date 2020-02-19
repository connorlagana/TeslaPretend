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
    console.log("got this far 1");
    const currentGarage = this.props.garages.find(
      garage => garage.id === parseInt(this.props.garageId)
    );
    this.setState({ currentGarage });
    console.log("got this far 2");
  };

  componentDidMount() {
    console.log("got this far 3");
    this.setCurrentGarage();
    console.log(this.state);
  }

  componentDidUpdate(prevProps) {
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
