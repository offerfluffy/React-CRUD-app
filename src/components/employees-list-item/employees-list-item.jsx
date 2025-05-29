import { Component } from "react";

import "./employees-list-item.css";

// props / props.name / props.salary
class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      liked: false,
    };
  }

  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };

  setLike = () => {
    this.setState(({ liked }) => ({
      liked: !liked,
    }));
  };

  render() {
    const { name, salary, onDelete } = this.props;
    const { increase, liked } = this.state;

    return (
      <li
        className={
          "list-group-item" +
          (increase ? " increase" : "") +
          (liked ? " like" : "") +
          " d-flex justify-content-between"
        }
      >
        <span onClick={this.setLike} className="list-group-item-label">
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + "$"}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            onClick={this.onIncrease}
            className="btn-cookie btn-sm"
          >
            <i className="fas fa-cookie"></i>
          </button>
          <button type="button" onClick={onDelete} className="btn-trash btn-sm">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
