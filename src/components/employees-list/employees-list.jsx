import EmpolyeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmpolyeesList = ({
  data,
  onDelete,
  onToggleProp,
  onUpdateSalary,
}) => {
  const elements = data.map((employee) => {
    // name={employee.name} salary={employee.salary}
    // can use index of array, but only if squence of elements wont change
    // need key for items that are same in lists,for Resconsalation Alghorithm
    const { id, ...employeeProps } = employee;
    return (
      <EmpolyeesListItem
        key={id}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
        onUpdateSalary={(value) => {
          onUpdateSalary(id, value);
        }}
        {...employeeProps}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmpolyeesList;
