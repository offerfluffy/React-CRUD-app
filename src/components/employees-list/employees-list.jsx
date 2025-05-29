import EmpolyeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmpolyeesList = ({ data, onDelete }) => {
  const elements = data.map((employee) => {
    // name={employee.name} salary={employee.salary}
    // can use index of array, but only if squence of elements wont change
    const { id, ...employeeProps } = employee;
    // need key for items that are same in lists,for Resconsalation Alghorithm
    return (
      <EmpolyeesListItem
        key={id}
        onDelete={() => onDelete(id)}
        {...employeeProps}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmpolyeesList;
