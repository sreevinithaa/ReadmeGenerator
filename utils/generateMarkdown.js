// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseSection(license) {
    console.log(license);
    let badge="";
  if (license) {
    console.log(license);
   
    switch (license) {
      case "MIT":
        badge =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "Boost 1.0":
        badge =
          "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        break;
      case "Apache 2.0":
        badge =
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "BSD 2-Clause":
        badge =
          "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
        break;
      case "BSD 3-Clause":
        badge =
          "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        break;
      case "CC0 1.0":
        badge =
          "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
        break;
      case "CC BY 4.0":
        badge =
          "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
        break;
      case "CC BY-SA 4.0":
        badge =
          "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)";
        break;
      case "CC BY-NC 4.0":
        badge =
          "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)";
        break;
      case "CC BY-ND 4.0":
        badge =
          "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)";
        break;
      case "CC BY-NC-SA 4.0":
        badge =
          "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)";
        break;
      case "CC BY-NC-ND 4.0":
        badge =
          "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)";
        break;
      case "EPL 1.0":
        badge =
          "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
        break;
      case "GPL v3":
        badge =
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      case "GPL v2":
        badge =
          "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
        break;
      case "AGPL v3":
        badge =
          "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        break;
      case "LGPL v3":
        badge =
          "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
        break;
      case "FDL 1.3":
        badge =
          "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)";
        break;
      case "Hippocratic 2.1":
        badge =
          "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)";
        break;
      case "Hippocratic 3.0":
        badge =
          "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)";
        break;
      case "IPL 1.0":
        badge =
          "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
        break;
      case "ISC":
        badge =
          "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        break;
      case "MPL 2.0":
        badge =
          "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        break;
      case "Open Data Commons Attribution":
        badge =
          "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
        break;
      case "ODbL":
        badge =
          "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
        break;
      case "Artistic-2.0":
        badge =
          "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
        break;
      case "Open Font-1.1":
        badge =
          "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
        break;
      default:
        console.log("Score value is neither 10 or 20");

console.log(badge);
        return badge;
    }
  } else {
    return "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license) {
        return `https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg`;
    } else {
      return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
      return `![License](${renderLicenseLink(license)})`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function renderMarkDown(data) {
 
  return  `# ${data.title}    ${renderLicenseBadge(data.license)}    
 
  ## Description  
  
    ${data.description}
     
  ## Table of Contents (Optional) 
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Test](#tests)
- [Questions](#questions)
  
 ## Installation
  
 ${data.installation}
  
## Usage
  
${data.Usage}
    
## License
    
This project is licensed under ${data.license}
     
## Contributors

${data.contributors}

## Tests
  
${data.test}

## Questions

Contact me with any questions: [email](mailto:${data.GitHub_email}) , [GitHub](https://github.com/${data.GitHub_username}) 
`;
}
module.exports = {
    renderMarkDown
  };

