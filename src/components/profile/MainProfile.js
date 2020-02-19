import React, { Component } from "react";
import ProfileHeader from "./ProfileHeader.js";
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
        <ProfileHeader createGarage={this.createGarage} />
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

        <CreateGarageForm createGarage={this.createGarage} />
      </div>
    );
  }
}

export default withRouter(MainProfile);
