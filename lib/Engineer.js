// Importing employee constructor
const Employee = require("./Employee");

// Engineer constructor extends employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling employee constructor
        super (name, id, email);
        this.github = github;
    }

    // Returning GitHub from input
    getGitHub () {
        return this.gitHub;
    }

    // Override employee role to engineer
    getRole () {
        return "Engineer";
    }

}

// To be exported
module.exports = Engineer; 