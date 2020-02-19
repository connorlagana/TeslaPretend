import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getCarsForGarage } from "../../services/api_helper.js";

export default class SingleGarage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGarage: null,
      carsInTheGarage: [],
      title: ""
    };
  }

  setCurrentGarage = async () => {
    const currentGarage = this.props.garages.find(
      garage => garage.id === parseInt(this.props.garageId)
    );
    await this.setState({ currentGarage });
    console.log("got this far 2");
    this.getCars(this.state.currentGarage.id);
  };

  getCars = async id => {
    console.log("got this far 1");
    console.log("this is the id", id);
    const carsToDisplay = await getCarsForGarage(id);
    console.log(carsToDisplay);
    this.setState({
      carsInTheGarage: carsToDisplay
    });
  };

  async componentDidMount() {
    await this.setCurrentGarage();
  }

  componentDidUpdate(prevProps) {
    console.log(this.state.currentGarage.id, "updated");

    if (prevProps.garageId !== this.props.garageId) {
      this.setCurrentGarage();
    }
    console.log(this.state);
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  // updateGarageTitle =

  render() {
    return (
      <div>
        {this.state.currentGarage && (
          <>
            <h1>{this.state.currentGarage.title}</h1>
            <form>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
              <button onClick={this.updateGarageTitle}>
                Update {this.state.currentGarage.title}
              </button>
            </form>
            <Link to={`/garages/${this.state.currentGarage.id}/edit`}>
              <button>Edit</button>
            </Link>
            {this.state.carsInTheGarage &&
              this.state.carsInTheGarage.map(car => (
                <div key={car.id}>
                  {/* <Link to={`/garages/${garage.id}`}> */}
                  <div>Name:</div>
                  <div>{car.name}</div>
                  <div>Battery:</div>
                  <div>{car.battery}</div>
                  <div>Color:</div>
                  <div>{car.color}</div>
                  <div>Interior:</div>
                  <div>{car.interior}</div>
                  <div>Wheels:</div>
                  <div>{car.wheel}</div>
                  <div>Autopilot:</div>
                  <div>{car.autopilot}</div>
                  <div>Price:</div>
                  <div>{car.price}</div>
                  {/* </Link> */}
                  <button>Delete {car.name}</button>
                </div>
              ))}
          </>
        )}
      </div>
    );
  }
}
