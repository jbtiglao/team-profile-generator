// Using employee constructor
import Employee from '../lib/Employee';

// Creating employee object
test('creates an employee object', () => {
    const employee = new Employee('Janey', 123, 'janeytiglao@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Gets name from getName
test('gets employee name', () => {
    const employee = new Employee('Janey', 123, 'janeytiglao@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Gets id from getID
test('gets employee ID', () => {
    const employee = new Employee('Janey', 123, 'janeytiglao@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// Gets email from getEmail
test('gets employee email', () => {
    const employee = new Employee('Janey', 123, 'janeytiglao@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Gets role from getRole
test('gets role of employee', () => {
    const employee = new Employee('Janey', 123, 'janeytiglao@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});
