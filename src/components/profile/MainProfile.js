import React, { Component } from "react";

import { Route, withRouter } from "react-router-dom";
import {
  indexGarages,
  postGarage,
  putGarage,
  deleteGarage,
  verifyUser
} from "../../services/api_helper.js";
import ProfileGarages from "./ProfileGarages.js";
import SingleGarage from "./SingleGarage.js";
import CreateGarageForm from "./CreateGarageForm.js";
import Model3Battery from "../buy/model3/Model3Battery.js";
import Model3Hero from "../buy/model3/Model3Hero.js";

class MainProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      garages: [],
      currentGarage: null
    };
  }

  componentDidMount() {
    verifyUser();
    this.readAllGarages();
  }

  readAllGarages = async () => {
    const garages = await indexGarages();
    await this.setState({ garages });
    console.log(this.state.garages);
  };

  handleDeleteGarage = async garageData => {
    console.log(garageData);
  };

  createGarage = async garageData => {
    console.log(garageData);
    const newGarage = await postGarage(garageData);
    this.setState({
      garages: [...this.state.garages, newGarage]
    });
    this.props.history.push("/garages");
  };

  render() {
    return (
      <div>
        
        <Route
          exact
          path="/garages"
          render={() => <ProfileGarages garages={this.state.garages} />}
        />
        <Route
          exact
          path="/garages/:id"
          render={props => (
            <SingleGarage
              garageId={props.match.params.id}
              garages={this.state.garages}
              getCars={this.getCars}
            />
          )}
        />
        <Route
          exact
          path="/garages/:id/design"
          render={props => <Model3Hero garageId={props.match.params.id} />}
        />

        <CreateGarageForm createGarage={this.createGarage} />
      </div>
    );
  }
}

export default withRouter(MainProfile);
