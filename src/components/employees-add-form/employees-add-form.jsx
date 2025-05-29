import { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "", // Stores the current value of the "name" input field
      salary: "", // Stores the current value of the "salary" input field
    };
  }

  // ✅ GENERIC INPUT HANDLER:
  // e.target.name dynamically accesses the property based on the input's `name` attribute.
  // This allows one handler to update multiple fields using computed property names.
  // Example:
  // - If input has name="name" → this.setState({ name: ... })
  // - If input has name="salary" → this.setState({ salary: ... })
  
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>

        <form className="add-form d-flex">
          {/* ✅ CONTROLLED COMPONENTS:
              - In React, inputs are either controlled or uncontrolled.
              - A **controlled input** means its value is tied to state (via value={...}).
              - The input value is updated through setState().
              - Benefits: one source of truth (React state), easy validation, instant feedback, reset control.
          */}

          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Name"
            name="name" // Used as key in `this.state`
            value={name} // Controlled input: tied to React state
            onChange={this.onValueChange} // Calls handler on every keystroke
          />

          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Salary in $"
            name="salary" // Also used as a key in `this.state`
            value={salary} // Controlled input: tied to state
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
