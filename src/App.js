import "./App.css";
import React, { Component } from "react";
import Additem from "./component/Add";
import Todo from "./component/Todo";
class App extends Component {
  state = {
    courses: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Java-script" }],
    current: "",
  };
  addstate = (e) => {
    this.setState({
      current: e.target.value,
    });
  };

  addname = (e) => {
    e.preventDefault();
    let courses = this.state.courses;
    let current = this.state.current;
    if (current !== "") {
      courses.push({ name: current });
      this.setState({
        courses: courses,
        current: "",
      });
    }
  };
  deletname = (e) => {
    console.log(e);
    let courses = this.state.courses;
    courses.splice(e, 1);
    this.setState({
      courses: courses,
    });
  };
  editname = (index, value) => {
    let courses = this.state.courses;
    let edit = courses[index];
    edit.name = value;
    this.setState({
      courses: courses,
    });
  };
  render() {
    const courses = this.state.courses;
    const addcourse = this.state.courses.length ? (
      courses.map((name, index) => {
        return (
          <div key={index}>
            <Todo
              name={name}
              deletname={this.deletname}
              index={index}
              editname={this.editname}
              courses={this.state.courses}
            />
          </div>
        );
      })
    ) : (
      <h2>No Courses Here .. pleace Add Course</h2>
    );

    return (
      <div className="app">
        <h2>Add course</h2>
        <Additem
          addstate={this.addstate}
          addname={this.addname}
          current={this.state.current}
        />

        <div className="allli"> {addcourse}</div>
      </div>
    );
  }
}
export default App;
