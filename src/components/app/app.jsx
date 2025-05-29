import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmpolyeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";

import "./app.css";

function App() {
  const data = [
    { name: "John C", salary: 800, increase: true, id: 1 },
    { name: "Mary K", salary: 1000, increase: false, id: 2 },
    { name: "Kevin P", salary: 1200, increase: false, id: 3 },
    { name: "Peter P", salary: 1000, increase: true, id: 4 },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmpolyeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
