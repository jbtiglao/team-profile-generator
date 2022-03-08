// Using Engineer constructor
const Engineer = require("../lib/Engineer");

// Creating Engineer object
describe("Engineer", () => {
    describe("Object", () => {
        test("creates an Engineer object", () => {
            const engineer = new Engineer("Janey T.", 123, "janeytiglao@gmail.com", "jbtiglao");

            expect(engineer.github).toEqual(expect.any(String));
        });
    });

    // Gets github from gitHub
    describe("GitHub", () => {
        test("gets engineer github value", () => {
            const engineer = new Engineer("Janey T.", 123, "janeytiglao@gmail.com", "jbtiglao");

            expect(engineer.getGitHub()).toEqual
                expect.stringContaining(engineer.github.toString());
        });
    });

    // Gets role from gitRole
    describe("Role", () => {
        test("gets role of employee", () => {
            const engineer = new Engineer("Janey T.", 123, "janeytiglao@gmail.com", "jbtiglao");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});