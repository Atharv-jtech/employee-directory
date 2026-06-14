function EmployeeTable({ employees, onDelete, onToggleStatus , onEdit }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Active</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <tr key={employee._id}>
            <td>{employee.employeeId}</td>
            <td>
              {employee.firstName} {employee.lastName}
            </td>
            <td>{employee.email}</td>
            <td>{employee.department}</td>
            <td>{employee.active ? "Yes" : "No"}</td>
            <td>
              <td>
                <button
                  className={
                    employee.active ? "deactivate-btn" : "activate-btn"
                  }
                  onClick={() => onToggleStatus(employee)}
                >
                  {employee.active ? "Deactivate" : "Activate"}
                </button>
              </td>
            </td>
            <td>
              <button className="edit-btn" onClick={() => onEdit(employee)}>
                Edit
              </button>
            </td>
            <td>
              <button
                className="delete-btn"
                onClick={() => onDelete(employee._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
