import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 90,
      userInfo: {
        name: "dummy_name",
      },
    };
    console.log("Constructor called for child component");
  }
  async componentDidMount() {
    // best place to make api call

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    console.log("ComponentDidMount is called for parent");
    this.setState({
      userInfo: {
        name: json.company,
      },
    });
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    console.log("Componnet is unmount");
  }
  render() {
    console.log("Component is rendered for child component");
    return (
      <h1>
        This is my h1 tag {this.props.name}
        {this.state.count}{" "}
        <button
          onClick={() => {
            this.setState({
              count: 99,
            });
          }}
        >
          Click here
        </button>
      </h1>
    );
  }
}
export default ProfileClass;
