import { Component } from "react";
import nextId from "react-id-generator";

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
        { name: "John C", salary: 800, id: nextId() },
        { name: "Mary K", salary: 1000, id: nextId() },
        { name: "Kevin P", salary: 1200, id: nextId() },
        { name: "Peter P", salary: 1000, id: nextId() },
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

  addItem = (name, salary) => {
    this.setState(({ data }) => {
      const newData = [...data, { name: name, salary: salary, id: nextId() }];
      return {
        data: newData,
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
        <EmployeesAddForm onSubmit={this.addItem} />
      </div>
    );
  }
}

export default App;
