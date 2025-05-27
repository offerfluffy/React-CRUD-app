import EmpolyeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmpolyeesList = () => {
  return (
    <ul className="app-list list-group">
      <EmpolyeesListItem />
      <EmpolyeesListItem />
    </ul>
  );
};

export default EmpolyeesList;
