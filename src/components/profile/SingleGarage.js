import React, { Component } from "react";

import { Link } from "react-router-dom";
import { getCarsForGarage, putGarage } from "../../services/api_helper.js";

export default class SingleGarage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGarage: null,
      carsInTheGarage: [],
      obj: {
        title: ""
      }
    };
  }

  updateGarageTitle = objTit => {
    putGarage(this.state.currentGarage.id, objTit);
  };

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
    this.setState({
      obj: {
        title: value
      }
    });
    console.log(this.state);
  };

  // updateGarageTitle =

  render() {
    return (
      <div>
        {this.state.currentGarage && (
          <>
            <h1>{this.state.currentGarage.title}</h1>
            <Link to={`/garages/${this.state.currentGarage.id}/design`}>
              <button>Add a Car</button>
            </Link>
            <form
              onSubmit={e => {
                e.preventDefault();
                this.updateGarageTitle(this.state.obj);
              }}
            >
              <input
                type="text"
                name="title"
                value={this.state.obj.title}
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
                <div className="carIndy" key={car.id}>
                  <div>
                    <div>Name:</div>
                    <div>{car.name}</div>
                  </div>
                  <div>
                    <div>Battery:</div>
                    <div>{car.battery}</div>
                  </div>
                  <div>
                    <div>Color:</div>
                    <div>{car.color}</div>
                  </div>
                  <div>
                    <div>Interior:</div>
                    <div>{car.interior}</div>
                  </div>
                  <div>
                    <div>Wheels:</div>
                    <div>{car.wheel}</div>
                  </div>
                  <div>
                    <div>Autopilot:</div>
                    <div>{car.autopilot}</div>
                  </div>
                  <div>
                    <div>Price:</div>
                    <div>{car.price}</div>
                  </div>

                  <button>Delete {car.name}</button>
                </div>
              ))}
          </>
        )}
      </div>
    );
  }
}
