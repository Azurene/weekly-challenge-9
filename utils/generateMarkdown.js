// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  }

  if (license === "Apache License 2.0") {
    return `![License](https://img.shields.io/badge/license-Apache%202.0-blue)`;
  }

  if (license === "GNU GPLv3") {
    return `![License](https://img.shields.io/badge/license-GNU%20GPLv3-blue)`
  }

  if (license === "MIT") {
    return `![License](https://img.shields.io/badge/license-MIT-green)`
  }

  if (license === "ISC") {
    return `![License](https://img.shields.io/badge/license-ISC-green)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  } else {
    return `
    * [License](#license)
    `;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return `
### License
    
License used: ${license}
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ### Description
  ${data.description}

  ### Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Contact](#contact)
  
  ### Installation
  ${data.installation}

  ### Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ### Contributions
  ${data.contributing}

  ### Testing
  To test, run the following command:
  ${data.testing}

  ### Contact
  Github: [${data.github}](https://github.com/${data.github})

  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
