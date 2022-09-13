// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)]"
  } else if (license === "GNU AGPL v3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  } else if (license ==="Apache 2.0 License") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if(license === 'Boost Software License 1.0'){
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;"
  } else return ""; 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[License: MIT](https://opensource.org/licenses/MIT)"
  } else if (license === "GNU AGPL v3") {
    return "[License: AGPL v3](https://www.gnu.org/licenses/agpl-3.0)"
  } else if (license === "Apache 2.0 License"){
    return "[License: Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === 'Boost Software License 1.0'){
    return "[License: Boost Software License] (https://www.boost.org/LICENSE_1_0.txt)"
  } else return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT" || license === "GNU AGPL v3"|| license === "Apache 2.0 License" || license === "Boost Software License 1.0" ) {
    return  "## License"
  } else return "";
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, image, fullname, video, description, installations, usage, contribution, test, license, github, email, githubrepo}) => {
  return `# ${title}
${renderLicenseBadgeLink(license)}

## Description
${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
## Installation
${data.install}
## Usage
 ${data.usage}
## License
${renderLicenseSection(license)}
For more informaation you can click the link below:
${renderLicenseLink(license)}
## Contributing
 ${data.contributing}
## Tests
✏️ ${data.tests}
## Questions
  
Feel free to contact me:
Github: https://github.com/${github}
Email: ${email}
`;
};

module.exports = generateMarkdown;
