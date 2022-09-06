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
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
