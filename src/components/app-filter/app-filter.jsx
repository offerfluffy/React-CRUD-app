import "./app-filter.css";

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-light">
        All empolyees
      </button>
      <button type="button" className="btn btn-outline-light">
        Promotion
      </button>
      <button type="button" className="btn btn-outline-light">
        Salary bigger than 1000$
      </button>
    </div>
  );
};

export default AppFilter;
