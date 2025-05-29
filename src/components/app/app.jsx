import { Component } from "react";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmpolyeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C", salary: 800, increase: true, id: 1 },
        { name: "Mary K", salary: 1000, increase: false, id: 2 },
        { name: "Kevin P", salary: 1200, increase: false, id: 3 },
        { name: "Peter P", salary: 1000, increase: true, id: 4 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmpolyeesList data={data} onDelete={this.deleteItem} />
        <EmployeesAddForm />
      </div>
    );
  }
}

export default App;
