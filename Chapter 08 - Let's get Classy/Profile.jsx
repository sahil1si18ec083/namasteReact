import React from "react";
import ProfileClass from "./ProfileClass";

import { Component } from "react";
class Profile extends Component {
  constructor(props) {
    // console.log("Parent component is called");
    super(props);
  }
  componentDidMount() {
    // console.log("componnetDid MOUNT IS CALLED FOR PARENT");
  }
  render() {
    // console.log("render function called for parent componnet");
    return (
      <h2>
        This is my profile component
        <ProfileClass name="sahil" />
      </h2>
    );
  }
}
export default Profile;
