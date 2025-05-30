import "./app-info.css";

const AppInfo = ({ data }) => {
  const totalCount = data.length;
  const bounsCount = data.filter((item) => item.increase).length;
  return (
    <div className="app-info">
      <h1>Empolyees List In Company</h1>
      <h2>Total count of employees: {totalCount}</h2>
      <h2>Bonus will get: {bounsCount}</h2>
    </div>
  );
};

export default AppInfo;
