export default function iterateThroughObject(reportWithIterator) {
  const employees = reportWithIterator.allEmployees;
  const departmentKeys = Object.keys(employees);
  let employeeNames = '';

  for (let key of departmentKeys) {
    const departmentEmployees = employees[key];
    employeeNames += departmentEmployees.join(' | ') + ' ';
  }

  return employeeNames.trim();
}