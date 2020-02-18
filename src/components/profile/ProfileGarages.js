import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProfileGarages extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.garages);
  }

  // {this.props.garages.map((garage, key) => (
  //   <div className="garage" key={key}>
  //     {/* <Link to={`/${garage.ticker}`}> */}
  //     <div id="name">{garage.name}</div>
  //     {/* </Link> */}
  //   </div>
  // ))}

  render() {
    return (
      <div>
        {this.props.garages &&
          this.props.garages.map(garage => (
            <div key={garage.id}>
              <Link to={`/garages/${garage.id}`}>
                <h3>{garage.title}</h3>
              </Link>
              <button onClick={this.props.handleDeleteGarage}>
                Delete {garage.title}
              </button>
            </div>
          ))}
        <Link to="/garages/new">
          <button>Add a garage</button>
        </Link>
      </div>
    );
  }
}

export default ProfileGarages;
