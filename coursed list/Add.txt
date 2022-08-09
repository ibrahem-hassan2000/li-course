import React, { Component } from "react";

class Additem extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.addname}>
          <input
            type="text"
            value={this.props.current}
            onChange={this.props.addstate}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default Additem;
