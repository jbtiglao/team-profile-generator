// Using Engineer constructor
import Engineer from '../lib/Engineer';

// Creating Engineer object
test('create an Engineer object', () => {
    const engineer = new Engineer('Janey', 123, 'janeytiglao@gmail.com', jbtiglao);

    expect(engineer.github).toEqual(expect.any(String));
});

// Gets github from gitHub
test('gets engineer github value', () => {
    const engineer = new Engineer('Janey', 123, 'janeytiglao@gmail.com', 'jbtiglao');

    expect(engineer.getGitHub()).toEqual.stringContaining(engineer.github.toString());
});

// Gets role from gitRole
test('gets role of employee', () => {
    const engineer = new Engineer('Janey', 123, 'janeytiglao@gmail.com');

    expect(engineer.getRole()).toEqual("Engineer");
});