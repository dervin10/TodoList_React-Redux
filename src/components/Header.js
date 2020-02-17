import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { AddNewTodo } from "../actions/index";

const styles = theme => ({
  header: {
    width: "100%",
    height: 80,
    position: "fixed",
    padding: 15,
    top: 0,
    left: 0,
    zIndex: 5,
    background: "#25b99a",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  todoInput: {
    width: "100%",
    height: 50,
    float: "left",
    color: "#fff",
    fontSize: 15,
    fontWeight: 400,
    textIndent: 18,
    padding: "0 60px 0 0",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "5px 25px 25px 5px",
    border: 0,
    boxShadow: "none",
    outline: "none"
  },
  todoSubmit: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 2,
    borderRadius: 25,
    background: "#fff",
    border: 0,
    boxShadow: "none",
    outline: "none",
    cursor: "pointer"
  },
  svg: {
    width: 16,
    height: 16,
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "-8px 0 0 -8px",
    "& .fill": {
      fill: "#25b99a"
    }
  },
  noFill: {
    fill: "none"
  },
  fill: {
    fill: "#c0cecb"
  }
});

const svgButton = classes => (
  <svg
    className={classes.svg}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 16 16"
    tyle="enable-background:new 0 0 16 16;"
    xmlSpace="preserve">
    <g>
      <path
        className={classes.fill}
        d="M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1s1,0.5,1,1v6h6C15.5,7,16,7.5,16,8z"
      />
    </g>
  </svg>
);

const HandleAddNewTodo = (addNewTodo, setContent, content) => {
  addNewTodo({ content, completed: false });
  setContent("");
};

const Header = props => {
  const { classes, addNewTodo } = props;
  const [content, setContent] = useState("");

  return (
    <header className={classes.header}>
      <input
        className={classes.todoInput}
        type="text"
        placeholder="Enter an activity.."
        onChange={e => setContent(e.target.value)}
        value={content}
      />
      {/* onClick={() => setTodos([...todos, { content, completed: false }])} */}
      <button
        className={classes.todoSubmit}
        onClick={() => HandleAddNewTodo(addNewTodo, setContent, content)}
        id="add">
        {svgButton(classes)}
      </button>
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  addNewTodo: todo => dispatch(AddNewTodo(todo))
});

export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps)
)(Header);
