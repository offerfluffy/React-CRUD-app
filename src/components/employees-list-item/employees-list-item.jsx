import { Component } from "react";
import "./employees-list-item.css";

// props / props.name / props.salary
class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: this.props.salary,
      // Can be improved with using only Apps state for value
    };
  }

  onUpdateSalary = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      this.setState({ salary: value });
      this.props.onUpdateSalary(value);
    }
  };

  render() {
    const { name, increase, rise, onDelete, onToggleProp } = this.props;

    return (
      <li
        className={
          "list-group-item" +
          (increase ? " increase" : "") +
          (rise ? " like" : "") +
          " d-flex justify-content-between"
        }
      >
        <span
          onClick={onToggleProp}
          data-toggle="rise"
          className="list-group-item-label"
        >
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          value={this.state.salary}
          onChange={this.onUpdateSalary}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            data-toggle="increase"
            onClick={onToggleProp}
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
