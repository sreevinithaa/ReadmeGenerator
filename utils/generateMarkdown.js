// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    let badge;
    switch (license) {
      case "MIT":
        badge = "https://img.shields.io/badge/License-MIT-yellow.svg";
        break;
      case "Boost 1.0":
        badge = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
        break;
      case "Apache 2.0":
        badge = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
        break;
      case "BSD 2-Clause":
        badge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
        break;
      case "BSD 3-Clause":
        badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        break;
      case "BSD 4-Clause":
        badge = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
        break;

      case "Boost 1.0":
        badge = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
        break;
      case "Boost 1.0":
        badge = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
        break;
      case "Boost 1.0":
        badge = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
        break;
      case "Boost 1.0":
        badge = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
        break;
      case "Boost 1.0":
        badge = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
        break;
      case "Boost 1.0":
        badge = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
        break;
      default:
        console.log("Score value is neither 10 or 20");
    }
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
 ${data.discription}
  
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
 ${data.installation}
  
  ## Usage
  

  
  ## Credits
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  ## License
  
  ${renderLicenseLink(data.license)}
  
  ## Badges
  
  ${renderLicenseBadge(data.license)}
  
  
  ## Features
  
  If your project has a lot of features, list them here.
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ## Tests
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.

`;
}

module.exports = generateMarkdown;
