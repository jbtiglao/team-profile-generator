// Create Team Manager card
const generateManager = function (manager) {
    return `
    <div class="">
        <div class="card ">
            <div class="card-header">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
            </div>

            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office-number">Office Number:${manager.officeNumber}</p>

            </div>
           
        </div>
    </div>
    `;
}

// Create Engineer card
const generateEngineer = function (engineer) {
    return `

    <div class="">
        <div class="card ">
            <div class="card-header">
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3>
            </div>

            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
           
        </div>
    </div>
    `
}

// Create Intern card
const generateIntern = function (intern) {
    return `
    <div class="">
        <div class="card ">
            <div class="card-header">
                <h2>${intern.name}</h2>
                <h3>Intern</h3>
            </div>

            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School:${intern.school}</p>

            </div>
           
        </div>
    </div>
    `
};


// Push array to page
generateHTML = (data) => {

    // Array for cards
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        // Call Team Manager function
        if (role === "Manager") {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // Call Engineer function
        if (role === "Engineer") {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        //  Call Intern function
        if (role === "Intern") {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
    }

    // Joining strings
    const employeeCards = pageArray.join('')

    // Return to generated page
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}

// Generate HTML page
const generateTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" />
</head>

<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand" id="navbar-text">Team Profile</span>
        </nav>
    </header>

    <main>
        <div class="container">
            <div class="row justify-content-center" id="employee-cards">
                <!-- Employee Cards -->
                ${employeeCards}
            </div>
        </div>
    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</body>
</html>
</html>

`;

}


// Export to index
module.exports = generateHTML;

