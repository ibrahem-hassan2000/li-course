import React, { Component } from "react";

class Todo extends Component {
  state = {
    good: false,
  };
  regood = () => {
    let good = this.state.good;
    this.setState({
      good: !good,
    });
  };

  renderitem = () => {
    return (
      <div className="row">
        <h3>{this.props.name.name}</h3>
        <div className="click">
          <button
            className="delet"
            onClick={() => {
              this.props.deletname(this.props.index);
            }}
          >
            Delet
          </button>
          <button
            className="edit"
            onClick={() => {
              this.regood();
            }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  };
  edit = (e) => {
    e.preventDefault();

    this.props.editname(this.props.index, this.input.value);
    this.regood();
  };
  updata = () => {
    return (
      <form className="updata" onSubmit={this.edit}>
        <input
          type="text"
          ref={(v) => {
            this.input = v;
          }}
          defaultValue={this.props.name.name}
        />
        <button className="btnupdata">Updata</button>
      </form>
    );
  };
  render() {
    return (
      <div className="li">
        {this.state.good ? this.updata() : this.renderitem()}
      </div>
    );
  }
}
export default Todo;
