import { Component } from "react";
import nextId from "react-id-generator";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmpolyeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";

import "./app.css";

// ✅ Controlled Inputs: Inputs tied to component state for full React control
// ✅ Lifting State Up: Move shared state to a parent, pass data/functions via props
// ✅ Dynamic Filtering: Use search term + filter condition to return filtered list
// ✅ Generic Toggle: Use [prop] to toggle any boolean field on objects (DRY principle)
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
      term: "",
      filter: "all",
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

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  filterData = (items, filter) => {
    switch (filter) {
      case "rise": {
        return items.filter((item) => item.rise);
      }
      case "salary": {
        return items.filter((item) => +item.salary > 1000);
      }
      default:
        return items;
    }
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onUpdateFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const visibleData = this.filterData(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo data={data} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onUpdateFilter={this.onUpdateFilter} />
        </div>

        <EmpolyeesList
          data={visibleData}
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
