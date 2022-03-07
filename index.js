// Required packages for the application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");

// Team array
const teamArray = [];


// Start of team manager prompts, include these information: team manager’s name, employee ID, email address, and office number
const addManager = () => {
    return inquirer.prompt ([
        {
                type: "input",
                name: "name",
                message: "What is the team manager's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log ("Please enter the team manager's name.");
                        return false;
                   }
                }
            },
            {   
                // Employee ID may consist of numbers, letters, or both
                type: "input",
                name: "id",
                message: "What is the team manager's employee ID?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log ("Please enter the team manager's employee ID.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the the team manager's email address?",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log ("You must enter the manager's email address.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the team manager's office number?",
                validate: nameInput => {
                    if (isNaN(nameInput)) {
                        console.log ("Please enter the office number.");
                        return false;
                    } else {
                        return true;
                    }

                }
            } 
        ])

        // Add the new team manager information and push it to the teamArray
        .then(managerInput => {
            const {name, id, email, officeNumber} = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            console.log(manager);
        })
};

             

// When the team manager is added, the user is presented with the option to add a new employee 
// to the team, i.e., engineer or intern, or to finish building the team
const addEmployee = () => {
    console.log (`
    -------------------------------------------------------------
    Welcome to your team! Proceed to add a team member or to exit.
    -------------------------------------------------------------
    `);

    return inquirer.prompt ([
        {       
                type: "list",
                name: "role",
                message: "Please select the employee's role.",
                choices: ["Engineer", "Intern"],
            },
            {
                // When user selects a role, prompts for the role start
                // Prompts for engineer includes: employee's name, ID, email, and GitHub username
                // Prompts for intern includes: employee's name, ID, email, and school
                // After entering employee information, user is taken back to the menu
                type: "input",
                name: "name",
                message: "What is the employee's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the employee's name.");
                        return false;
                    }
                }
            },
            {   
                // Employee ID may consist of numbers, letters, or both
                type: "input",
                name: "id",
                message: "What is the employee's employee ID?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the employee ID.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email address?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("You must enter the employee's email address.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineer's GitHub username?",
                when: (input) => input.role === "Engineer",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the GitHub username.")
                    }
                }
            },
            {
                type: "input",
                name: "school",
                message: "Please enter the intern's school.",
                when: (input) => input.role === "Intern",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("You must enter the intern's school.")
                    }
                }
            },
            {
                type: "confirm",
                name: "confirmAddEmployee",
                message: "Would you like to add more team members?",
                default: false
            }
        ])
        // Add the new employee information and push it to teamArray
        .then(employeeData => {

            // Data for employee types
            let {name, id, email, role, github, school, confirmAddEmployee} = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer (name, id, email, github);
                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern (name, id, email, school);
                console.log(employee);
            }

            teamArray.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(teamArray);
            } else {
                return teamArray;
            }
        })

};

// When user decides to finish building his/her team, the user will exit the application, and the HTML is generated
// Function to generate HTML page file using fs
const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
        // If there is an error
        if (err) {
            console.log(err);
            return;
            //When the profile has been created
        } else {
            console.log("All done! Your team profile has been created!")
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });





