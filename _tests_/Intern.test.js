// Using Intern constructor
import Intern from '../lib/Intern';

// Creating Intern object
test('creates an intern object', () => {
    const intern = new Intern('Janey', 123, 'janeytiglao@gmail.com', 'UCI');

    expect(intern.school).toEqual(expect.any(String));
});

// Gets school from getSchool
test('gets employee school', () => {
    const intern = new Intern('Janey', 123, 'janeytiglao@gmail.com', 'UCI');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Gets role from getRole
test('gets role of employee', () => {
    const intern = new Intern('Janey', 123, 'janeytiglao@gmail.com');

    expect(intern.getRole()).toEqual("Intern");
});