import "./app-filter.css";

const AppFilter = ({ onUpdateFilter, filter }) => {
  const setStyle = (elem) => {
    return `btn ${elem === filter ? "btn-light" : "btn-outline-light"}`;
  };

  const buttonData = [
    { name: "all", label: "All employees" },
    { name: "rise", label: "Promotion" },
    { name: "salary", label: "Salary bigger than 1000$" },
  ];

  return (
    <div className="btn-group">
      {buttonData.map(({ name, label }) => (
        <button
          key={name}
          type="button"
          className={setStyle(name)}
          onClick={() => onUpdateFilter(name)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default AppFilter;
