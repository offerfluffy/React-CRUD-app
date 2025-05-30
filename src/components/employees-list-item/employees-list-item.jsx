import "./employees-list-item.css";

// props / props.name / props.salary
const EmployeesListItem = ({
  name,
  salary,
  increase,
  rise,
  onDelete,
  onToggleProp /* onToggleRise, onToggleIncrease, */,
}) => {
  return (
    <li
      className={
        "list-group-item" +
        (increase ? " increase" : "") +
        (rise ? " like" : "") +
        " d-flex justify-content-between"
      }
    >
      <span
        onClick={onToggleProp}
        data-toggle="rise"
        className="list-group-item-label"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          data-toggle="increase"
          onClick={onToggleProp}
          className="btn-cookie btn-sm"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" onClick={onDelete} className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
