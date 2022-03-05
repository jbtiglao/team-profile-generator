// Importing Employee constructor
const Employee = require("./Employee");

// Manager constructor extends employee constructor
class Manager extends Employee {
    constructor (name, id, email, phone) {
        // Calling employee constructor
        super (name, id, email);
        this.phone = phone;
    }

    // Override employee role to manager
    getRole () {
        return "Manager";
    }
}

// To be exported
module.exports = Manager;