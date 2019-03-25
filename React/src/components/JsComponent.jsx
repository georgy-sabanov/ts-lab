import React from "react";

class JsComponent extends React.Component {
  render() {
    return <h1>I are JS, {this.props.name}</h1>;
  }
}

export default JsComponent;