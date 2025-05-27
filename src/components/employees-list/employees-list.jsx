import EmpolyeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmpolyeesList = ({ data }) => {
  const elements = data.map((employee) => {
    // name={employee.name} salary={employee.salary}
    return <EmpolyeesListItem {...employee} />;
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmpolyeesList;
