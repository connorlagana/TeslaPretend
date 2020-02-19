import React, { Component } from "react";

import { Link } from "react-router-dom";
import {
  getCarsForGarage,
  putGarage,
  deleteCar
} from "../../services/api_helper.js";

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

  deleteComment = async (e, carId) => {
    e.preventDefault();
    await deleteCar(this.state.currentGarage.id, carId);
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
                  <div className="carIndyUnit">
                    <img id="garageCarImage" src={car.image} />
                  </div>
                  <div className="carIndyUnit">
                    <div>Model:</div>
                    <div>Model 3</div>
                  </div>
                  <div className="carIndyUnit">
                    <div>Battery:</div>
                    <div>{car.battery}</div>
                  </div>
                  <div className="carIndyUnit">
                    <div>Color:</div>
                    <div>{car.color}</div>
                  </div>
                  {/* <div className="carIndyUnit">
                    <div>Interior:</div>
                    <div>{car.interior}</div>
                  </div> */}
                  <div className="carIndyUnit">
                    <div>Wheels:</div>
                    <div>{car.wheel}</div>
                  </div>

                  <div className="carIndyUnit">
                    <div>Price:</div>
                    <div>{car.price}</div>
                  </div>

                  <button onClick={e => this.deleteComment(e, car.id)}>
                    Delete {car.id}
                  </button>
                </div>
              ))}
          </>
        )}
      </div>
    );
  }
}
