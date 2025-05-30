import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all",
    };
  }

  onUpdateFilter = (e) => {
    const filter = e.currentTarget.getAttribute("data-filter");
    this.setState({ filter });
    this.props.onUpdateFilter(filter);
  };

  setStyle = (elem) => {
    return `btn ${
      elem === this.state.filter ? "btn-light" : "btn-outline-light"
    }`;
  };

  render() {
    return (
      <div className="btn-group">
        <button
          onClick={this.onUpdateFilter}
          type="button"
          data-filter="all"
          className={this.setStyle("all")}
        >
          All empolyees
        </button>
        <button
          onClick={this.onUpdateFilter}
          type="button"
          data-filter="rise"
          className={this.setStyle("rise")}
        >
          Promotion
        </button>
        <button
          onClick={this.onUpdateFilter}
          type="button"
          data-filter="salary"
          className={this.setStyle("salary")}
        >
          Salary bigger than 1000$
        </button>
      </div>
    );
  }
}

export default AppFilter;
