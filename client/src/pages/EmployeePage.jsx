import { useEffect, useState } from "react";
import {
  getEmployee,
  deleteEmployee,
  updateEmployee,
} from "../services/employeeService";

import EmployeeTable from "../components/EmployeeTable";
import EmployeeForm from "../components/EmployeeForm";

function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const loadEmployee = async () => {
    try {
      const data = await getEmployee();
      setEmployees(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);

      alert("Employee Deleted Successfully");

      loadEmployee();
    } catch (error) {
      console.error(error);
    }
  };
  const handleToggleStatus = async (employee) => {
    try {
      await updateEmployee(employee._id, {
        ...employee,
        active: !employee.active,
      });

      loadEmployee();
    } catch (error) {
      console.error(error);
    }
  };
  const handleEdit = (employee) => {
    console.log(employee);
    setSelectedEmployee(employee);
  };
  return (
    <div className="container">
      <h1>Employee Directory</h1>

      <EmployeeForm selectedEmployee={selectedEmployee} />
      <EmployeeTable
        employees={employees}
        onDelete={handleDelete}
        onToggleStatus={handleToggleStatus}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default EmployeePage;
