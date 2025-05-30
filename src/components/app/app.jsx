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
        {
          name: "John C",
          salary: 800,
          increase: false,
          rise: false,
          id: nextId(),
        },
        {
          name: "Mary K",
          salary: 1000,
          increase: false,
          rise: false,
          id: nextId(),
        },
        {
          name: "Kevin P",
          salary: 1200,
          increase: false,
          rise: false,
          id: nextId(),
        },
        {
          name: "Peter P",
          salary: 1000,
          increase: false,
          rise: false,
          id: nextId(),
        },
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
      const newData = [
        ...data,
        {
          name: name,
          salary: salary,
          increase: false,
          rise: false,
          id: nextId(),
        },
      ];
      return {
        data: newData,
      };
    });
  };

  // onToggleIncrease = (id) => {
  //   // Hardest Way
  //   // this.setState(({ data }) => {
  //   // const index = data.findIndex((el) => el.id === id);
  //   // const old = data[index];
  //   // const newItem = { ...old, increase: !old.increase };
  //   // const newData = [
  //   //   ...data.slice(0, index),
  //   //   newItem,
  //   //   ...data.slice(index + 1),
  //   // ];
  //   // return {
  //   //   data: newData,
  //   // };
  //   // });

  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, increase: !item.increase };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  // onToggleRise = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, rise: !item.rise };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <AppInfo data={data} />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmpolyeesList
          data={data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          // onToggleIncrease={this.onToggleIncrease}
          // onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onSubmit={this.addItem} />
      </div>
    );
  }
}

export default App;
