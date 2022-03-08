// Using Manager constructor
const Manager = require("../lib/Manager");

// Creating Manager object
describe("Manager", () => {
    describe("Object", () => {
        test("creates a Manager object", () => {
            const manager = new Manager("Janey T.", 123, "janeytiglao@gmail.com", 8);

            expect(manager.officeNumber).toEqual(expect.any(Number));
        });
    });

    // Gets role from getRole
    describe("Role", () => {
        test("gets role of employee", () => {
            const manager = new Manager("Janey", 123, "janeytiglao@gmail.com");

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});