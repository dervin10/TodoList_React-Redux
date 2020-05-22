import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import Container from "./components/Container";
import { AddNewTodo } from "./actions/index";
import "./App.css";

// testing commitizen
const App = props => {
  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  );
};

const MapDispatchToProps = dispatch => ({
  addNewTodo: todo => dispatch(AddNewTodo(todo))
});

export default connect(null, MapDispatchToProps)(App);
