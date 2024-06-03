// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license){
  if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT";

    } else if (license === "Apache 2.0"){
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
   
      } else if (license === "GNU GPL v3"){
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https:// www.gnu.org/licenses/gpl-3.0)";
       
        } else if (license === "BSD 3-Clause"){
          return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://spdx.org/licenses/BSD-3-Clause)";
          
          } else if (license === "Boost Software License 1.0"){
            return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://spdx.org/licenses/Boost-1.0)";
          
            } else if (license === "Eclipse Public License 2.0"){
              return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://  spdx.org/licenses/EPL-1.0)";
            } else (license ==="")
            return "";
                    

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
    return "https://opensource.org/licenses/MIT";
    } else if (license === "Apache 2.0"){
      return "https://opensource.org/licenses/Apache-2.0";
    }
    else if (license === "GNU GPL v3"){
      return "https://www.gnu.org/licenses/gpl-3.0";
      }
      else if (license === "BSD 3-Clause"){
        return "https://spdx.org/licenses/BSD-3-Clause";
        }
        else if (license === "Boost Software License 1.0"){
          return "https://spdx.org/licenses/Boost-1.0";
          }
          else if (license === "Eclipse Public License 2.0"){
            return "https://spdx.org/licenses/EPL-1.0";
            } else (license ==="")
            return "";    
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT"){
    return `This project is licensed under the ${license} license.`
    } else if (license === "Apache 2.0"){
      return `This project is licensed under the ${license} license.`
      }
      else if (license === "GNU GPL v3"){
        return `This project is licensed under the ${license} license.`
        }
        else if (license === "BSD 3-Clause"){
          return `This project is licensed under the ${license} license.`
          }
          else if (license === "Boost Software License 1.0"){
            return `This project is licensed under the ${license} license.`
            }
            else if (license === "Eclipse Public License 2.0"){
              return `This project is licensed under the ${license} license.`
              } else (license ==="")
              return "";
              
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  
  ## installation
  ${data.installation}
  ## usage
  ${data.usage}
  ## credits
  ${data.credits}
  ## license
  ${renderLicenseSection(data.license)}
  ## Badges
  ${data.badges}
  ## Features
  ${data.features}
  ## How to Contribute
  ${data.contributing}
  ## Tests
  ${data.tests}

`;
}

module.exports = generateMarkdown;
