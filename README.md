
  
# Team Profile Generator
A Unit 10, Object-Oriented Programming (OOP) assignment.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---
## Description

This is a Node.js command-line interface (CLI) application that takes in information about employees in a software engineering team, then generates a HTML webpage that displays a summary for each person. 

Since testing is key to making code maintainable, a unit test for every part of the application's code is also written by the author and passed by the application.

The application runs on Visual Studio Code, with the generated HTML file having the following interface when opened on a web browser:

![image11_teamprofile](https://user-images.githubusercontent.com/94569484/157873083-3d672bbe-e4cd-4fae-88b3-d6b794512d2a.png)

[team profile](/assets/images/image11_teamprofile.png)


### Video


![Image1_Demo](https://user-images.githubusercontent.com/94569484/157871887-8d6d01e2-b2ce-459c-9449-faf738e304f6.png)

[app demo](/assets/images/image1_demo.png)

To see how the application and its functionalities work, watch or download the [demonstration video here.](https://drive.google.com/file/d/12XWhOkCuVuHm7El9IwYjDrj1djG1kpIZ/view)

(Note: Video quality is better when the video is downloaded and viewed locally, than when played online.)

### Preliminaries
1. There is no starter code for this assignment.

2. A mock-up of the generated HTML showing the application's appearance and functionalities is provided. However, the styling in the image is just an example and the author has added her own styling.
  
3. The application follows the following directory structure, as indicated in the assignment's README file:

```md
.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── assets
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           
```

4. Before installing any dependencies, a `.gitignore` file was first created. It includes `node_modules/` and `.DS_Store`, while `dist` was removed from the list so Git could track this folder and include it when it is pushed to the application's repository.

---
## Table of Contents
1. [Title](#title)
2. [Description](#description)
3. [Installation](#installation)
4. [Usage](#usage)
5. [License](#license)
6. [Contributing](#contributing)
7. [Tests](#tests)
8. [Credits](#credits)
9. [Author](#author)
10. [Questions](#questions)
  
---
## Installation
Clone my GitHub repository:
```
https://github.com/jbtiglao/team-profile-generator
```

To install Inquirer dependencies, run:
```
npm install inquirer
```

To install Jest:
```
npm install --save-dev jest
```

The application is invoked through the following command:

```bash
node index.js
```

To view the generated team profile, open the following file on a web browser:
```
./dist/index.html
```

---
## Usage
Please refer to the walk-through video above, as well as the following instructions and screenshots.

### Features
The application has the following features and functionalities:

1. Upon initializing the application, the user or manager is prompted to enter the following information about the team manager: name, employee ID, email address, and office number.

2. When the user enters the last manager prompt response, all manager information will appear or are logged on the terminal. The same is true when the user enters all engineer and intern prompt reponses. 

3. When the manager's information is added and pushed to the repository, the user is presented with the menu, which gives the user the option to add more team members, i.e., Engineer and/or Intern, or to finish building his/her team. In which case, the user will exit the application and a HTML file containing the information entered by the user is generated.

<img width="1362" alt="image2_managerprompts" src="https://user-images.githubusercontent.com/94569484/157872377-3161fce4-a835-4236-8fb0-73ee06ce59d2.png">

[manager prompts and menu](/assets/images/image2_managerprompts.png)

4. Should the user choose to add an engineer, the user is prompted to enter the following information: engineer's name, employee ID, email address, and GitHub username.

5. When the new engineer information is added and pushed to the repository, the user is taken back to the menu. This means he/she could add more engineers and/or interns, depending on the number of team members he/she has. Otherwise, the user can opt to finish building the team and exit the application.

<img width="933" alt="image3_engineerprompts" src="https://user-images.githubusercontent.com/94569484/157872414-00967608-6206-451b-95e2-6ced2cfc890f.png">

[engineer prompts](/assets/images/image3_engineerprompts.png)

6. Should the user choose to add an intern, the user is prompted with the following information: intern's name, employee ID, email address, and school. 

7. When the new intern information is added and pushed to the repository, the user is taken back to the menu, where the user could add more team members, i.e., Engineer and/or Intern, or finish building the team and exit the application.

<img width="935" alt="image4_internprompts" src="https://user-images.githubusercontent.com/94569484/157872454-abc2dc4d-1368-4fb4-9517-4bcf20e718b4.png">

[intern prompts](/assets/images/image4_internprompts.png)

8. Should the user choose to finish building the team, the user will exit the application and a HTML file is generated. The generated HTML file displays the team roster, including a summary of information on each team member whose employee data was entered in the application. This can be accessed and viewed on a browser from the following file:
```
./dist/index.html
```
* Here is a [sample generated html file.]()

<img width="263" alt="image5_dist_html" src="https://user-images.githubusercontent.com/94569484/157872562-df8c3812-b98c-42be-9dff-dfd4a1060fd3.png">

* Here is the image of [the html file that was generated during the demo video](/assets/images/image7_demo-generated-file.png)

9.  When the user clicks the email address on the generated HTML file, the user's default email program opens and populates the TO field of the email with the address.


<img width="993" alt="image8_users-email" src="https://user-images.githubusercontent.com/94569484/157872816-d6f8d5ea-45bb-4280-ab07-3a76b7ec72a5.png">

[user's email](/assets/images/image8_users-email.png)

10. When the user clicks on the GitHub username, the GitHub profile opens in a new tab.

<img width="1364" alt="image9_githublink" src="https://user-images.githubusercontent.com/94569484/157872877-562eebed-1e47-4d6c-afd9-f28337ac71de.png">

[github link](/assets/images/image9_githublink.png)

11. Validation on the employee information were added to ensure that user input is in the proper format. 

* When the user fails to enter the employee's name, employee ID, GitHub username, and school, the user is prompted to enter the same. 

* When the user fails to enter a number or numbers for the office number, the user is prompted to enter a number/numbers.

* When the user fails to enter the correct email format, the user is prompted to enter a valid email.

(Note: The user may enter letters, numbers, or a combination of both for the employee ID.)

12. Required classes. The application includes `Employee`, `Manager`, `Engineer`, and `Intern` classes. All classes pass the test when the command ```npm run test``` is initialized.

<img width="1440" alt="image10_tests" src="https://user-images.githubusercontent.com/94569484/157872923-82b85e1e-4042-463e-9c88-ff396ad8ffc6.png">

[tests](/assets/images/image10_tests.png)

---
## License
License used for this project - MIT
  
For more information on the above license and other license types, please see the following websites:  
- [Open Source Initiative](https://opensource.org/licenses)
- [Choose a License](https://choosealicense.com/)

---
## Contributing
To contribute to this application: 
* Submit a pull request. 
* Your new features will be merged after review and approval.

---
## Tests
1. The application uses [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. The functionalities of the application were tested manually, by opening the application in the integrated terminal, running
```
node index.js
```
and responding to the series of prompts, including the option to finish building the team profile. When the latter option is selected, the user will exit the application and a HTML file showcasing the team's profile is generated.

Here is a [generated team profile sample in a manual test the author conducted,](./--) while here is the [generated HTML file from the walk-through video](./---). 

2. The unit tests for the application's required classes: `Employee`, `Manager`, `Engineer`, and `Intern`, are located in the `_tests_` directory. 

To run the unit tests, the application uses [Jest](https://www.npmjs.com/package/jest).

To troubleshoot "No test specified" errors, where the test wouldn't run, the following section is added to the ```package.json``` after the Jest install:
```
{
  "scripts": {
    "test": "jest"
  }
}
```

(Note: The contents of ```package.json``` after the Inquirer and Jest installs were first deleted in this instance, then the above section was copied and pasted to the package, instead of merely adding it to the contents. This enabled the test to run.)

The test is initialized by invoking the following command on the integrated terminal:
```
npm run test
```

All classes pass the test when ran.

---
## Credits
The following resources and relevant documentation were consulted and/or utilized in the development of this application:
* Unit 10, Object-Oriented Programming reading materials, internet resources, and lectures, UCI Boot Camp.
* [Inquirer](https://npmjs.com)
* [Jest](https://jestjs.io/docs/getting-started)
* [Stackoverflow](https://stackoverflow.com) for troubleshooting testing, install, and package.json errors.
* [Bootstrap](https://getbootstrap.com)
* [jQuery](https://jquery.com)
* [Icons8](https://icons8.com)
* [cdnjs](https://cdnjs.com)
* [Screencastify](https:screencastify.com)
* [Open Source Initiative](https://opensource.org/licenses)
* [Choose a License](https://choosealicense.com/)

---
## Author
Jane Tiglao

---
## Questions
For questions or issues, please contact: 
* Jane Tiglao 
* Email: janeytiglao@gmail.com
* GitHub Username: jbtiglao
* GitHub Profile: https://github.com/jbtiglao

