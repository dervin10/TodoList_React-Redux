import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { connect } from "react-redux";
import { MoveTodo, DeleteTodo } from "../actions/index";
import { RemoveIcon, CompleteIcon } from "../images";

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    float: "left",
    padding: 15
  },
  todo: {
    width: "100%",
    float: "left"
  },
  liSyles: {
    "& li": {
      width: "100%",
      minHeight: 50,
      float: "left",
      fontSize: 14,
      fontWeight: 500,
      color: "#444",
      lineHeight: "22px",
      background: "#fff",
      borderRadius: 5,
      position: "relative",
      boxShadow: "0px 1px 2px rgba(44, 62, 80, 0.10)",
      margin: "0 0 10px 0",
      padding: "14px 100px 14px 14px",
      wordBreak: "break-word",
      listStyle: "none",
      textAlign: "left"
    }
  },
  "& li:last-of-type": {
    margin: 0
  },
  todoNotCompleted: {
    "& :empty:after": {
      content: "You have nothing to-do!",
      margin: "15px 0 0 0"
    }
  },
  completed: {
    position: "relative",
    padding: "60px 0 0 0 ",
    "&:before": {
      content: "",
      width: 150,
      height: 1,
      background: "#d8e5e0",
      position: "absolute",
      top: 30,
      left: "50%",
      margin: "0 0 0 -75px"
    }
  },
  divButtons: {
    width: 100,
    height: 50,
    position: "absolute",
    top: 0,
    right: 0,
    "& button": {
      width: 50,
      height: 50,
      float: "left",
      background: "none",
      position: "relative",
      border: 0,
      boxShadow: "none",
      outline: "none",
      cursor: "pointer",
      "&:last-of-type:before": {
        content: "",
        width: 1,
        height: 30,
        background: "#edf0f1",
        position: "absolute",
        top: 10,
        left: 0
      },
      "& svg": {
        width: 22,
        height: 22,
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: "-11px 0 0 -11px"
      }
    }
  },
  btnRemove: {
    "& svg:hover > path": {
      fill: "black"
    }
  },
  btnComplete: {
    "& svg": {
      borderRadius: 11,
      border: "1.5px solid #25b99a",
      transition: "background .2s ease",
      "& > rect": {
        fill: "none",
        "& > path": {
          fill: "#25b99a"
        }
      },
      "& > g > path": {
        fill: "#25b99a",
        transition: "fill 0.2s ease"
      }
    },
    "& svg:hover": {
      background: "rgba(37, 185, 154, 0.75)",
      "& > g > path": {
        fill: "#fff"
      }
    }
  },
  btnNotCompleted: {
    "& svg": {
      borderRadius: 11,
      background: "#25b99a",
      "& > rect": {
        fill: "none",
        "& > path": {
          fill: "#fff"
        }
      },
      "& > g > path": {
        fill: "#fff",
        transition: "fill 0.2s ease"
      }
    }
  }
}));

/* For React hooks only
// const moveTodo = (todos, setTodos, index) => {
//   todos[index].completed = !todos[index].completed;
//   setTodos([...todos]);
// };

// const deleteTodo = (todos, setTodos, index) => {
//   setTodos(todos.filter((todo, i) => i !== index));
// };
*/

const generateList = (todos, classes, moveTodo, deleteTodo) => {
  const result = [[], []];

  todos &&
    todos.every((todo, index) =>
      todo.completed
        ? result[1].push(
            <li key={todo.content}>
              {todo.content}
              <div className={classes.divButtons}>
                <button
                  className={classes.btnRemove}
                  onClick={() => deleteTodo(index)}>
                  <RemoveIcon />
                </button>
                <button
                  className={classes.btnNotCompleted}
                  onClick={() => moveTodo(index)}>
                  <CompleteIcon />
                </button>
              </div>
            </li>
          )
        : result[0].push(
            <li key={todo.content}>
              {todo.content}{" "}
              <div className={classes.divButtons}>
                <button
                  className={classes.btnRemove}
                  onClick={() => deleteTodo(index)}>
                  <RemoveIcon />
                </button>
                <button
                  className={classes.btnComplete}
                  onClick={() => moveTodo(index)}>
                  <CompleteIcon />
                </button>
              </div>
            </li>
          )
    );

  return result;
};

const Container = ({ todos, moveTodo, deleteTodo }) => {
  const classes = useStyles();
  const [completed, notCompleted] = generateList(
    todos,
    classes,
    moveTodo,
    deleteTodo
  );

  return (
    <div className={classes.container}>
      <ul
        className={classNames(
          [classes.todoNotCompleted],
          [classes.todo],
          [classes.liSyles]
        )}
        id="todo">
        {completed}
      </ul>
      <ul
        className={classNames(
          [classes.completed],
          [classes.todo],
          [classes.liSyles]
        )}>
        {notCompleted}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  moveTodo: index => dispatch(MoveTodo(index)),
  deleteTodo: index => dispatch(DeleteTodo(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
