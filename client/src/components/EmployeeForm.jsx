import { useState, useEffect } from "react";
import { createEmployee, updateEmployee } from "../services/employeeService";

function EmployeeForm({ selectedEmployee }) {
  const [formData, setFormData] = useState({
    employeeId: "",
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    joiningDate: "",
    active: true,
  });

  useEffect(() => {
    if (selectedEmployee) {
      setFormData({
        employeeId: selectedEmployee.employeeId,
        firstName: selectedEmployee.firstName,
        lastName: selectedEmployee.lastName,
        email: selectedEmployee.email,
        department: selectedEmployee.department,
        joiningDate: selectedEmployee.joiningDate
          ? selectedEmployee.joiningDate.split("T")[0]
          : "",
        active: selectedEmployee.active,
      });
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedEmployee) {
        await updateEmployee(selectedEmployee._id, formData);

        alert("Employee Updated Successfully");
      } else {
        await createEmployee(formData);

        alert("Employee Added Successfully");
      }

      setFormData({
        employeeId: "",
        firstName: "",
        lastName: "",
        email: "",
        department: "",
        joiningDate: "",
        active: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>{selectedEmployee ? "Edit Employee" : "Add Employee"}</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px",
          margin: "20px auto",
        }}
      >
        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={formData.employeeId}
          onChange={handleChange}
        />

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          <option value="Development">Development</option>
          <option value="Testing">Testing</option>
          <option value="DevOps">DevOps</option>
          <option value="HR">HR</option>
          <option value="Sales">Sales</option>
        </select>

        <input
          type="date"
          name="joiningDate"
          value={formData.joiningDate}
          onChange={handleChange}
        />

        <button type="submit">
          {selectedEmployee ? "Update Employee" : "Add Employee"}
        </button>
      </form>
    </div>
  );
}

export default EmployeeForm;
