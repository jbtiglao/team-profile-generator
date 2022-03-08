// Using Manager constructor
import Manager from '../lib/Manager';

// Creating Manager object
test('creates a Manager object', () => {
    const manager = new Manager('Janey', 123, 'janeytiglao@gmail.com', 8);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Gets role from getRole
test('gets role of employee', () => {
    const manager = new Manager('Janey', 123, 'janeytiglao@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});

