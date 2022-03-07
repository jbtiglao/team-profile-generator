// Packages required for the application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHTML = require("./src/generateHTML");

// Array where team members and their information are pushed
const teamArray = [];

// Application is initialized, Team Manager prompts start
function managerQuestions() {
    return (
        inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the manager's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's name.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's employee ID?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's employee ID.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the the manager's email address?",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("You must enter the manager's email address.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?",
                validate: nameInput => {
                    if (isNaN(nameInput)) {
                        console.log("Please enter the manager's office number.");
                        return false;
                    } else {
                        return true;
                    }

                },
            },
        ])
        // Add the new team manager information annd push it to the teamArray
        .then(managerInput => {
            const {
                name,
                id,
                email,
                officeNumber
            } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            console.log(manager);
            addEmployee()
        })
    );
}
managerQuestions();

// When team manager is added, user is presented with a menu with the option
// to add an engineer or an intern, or to finish building the team
async function addEmployee() {
    console.log(`
    ===========================================================================
    Welcome to your team! Proceed to add a member or finish building your team.
    ===========================================================================
    `);

    const answer = await inquirer.prompt([{
        type: "list",
        name: "role",
        message: "Please add a team member or finish building your team.",
        choices: ["Engineer", "Intern", "Finish Building My Team"],
    }, ]);
    switch (answer.role) {
        case "Engineer":
            engineerQuestions();
            break;
        case "Intern":
            internQuestions();
            break;
        default:
            finishBuild();
    }
};

// Prompts for Engineer
async function engineerQuestions() {
    const engineerInput = await inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
            validate: nameInput_1 => {
                if (nameInput_1) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's employee ID?",
            validate: nameInput_3 => {
                if (nameInput_3) {
                    return true;
                } else {
                    console.log("Please enter the engineer's employee ID.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?",
            validate: nameInput_5 => {
                if (nameInput_5) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email address.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
            validate: nameInput_7 => {
                if (nameInput_7) {
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub username.");
                    return false;
                }
            }
        },
    ]);
    const {
        name,
        id,
        email,
        github
    } = engineerInput;
    const engineer = new Engineer(name, id, email, github);
    teamArray.push(engineer);
    console.log(engineer);
    addEmployee();
}

// Prompts for Intern
function internQuestions() {
    return (
        inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the intern's name?",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's name");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's employee ID?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's employee ID.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email address?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's email address.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "school",
                message: "Please enter the intern's school.",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's school.");
                        return false;
                    }
                }
            },
        ])

        // Add the new intern information and push it to the teamArray
        .then((internInput) => {
            const {
                name,
                id,
                email,
                school
            } = internInput;
            const intern = new Intern(name, id, email, school);
            teamArray.push(intern);
            console.log(intern);
            addEmployee();
        })
    );
}

// When user decides to finish building his/her team, user will exit
// the application and a HTML file is generated
function finishBuild() {
    fs.writeFileSync(
        path.join(path.resolve(__dirname, "dist"), "index.html"),
        generateHTML(teamArray),
        console.log("All done! Your team profile has been generated.")
    );
}