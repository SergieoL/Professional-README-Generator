module.exports = readmeData => {

    return `
# Project Title
${readmeData.title}
    
## Description
-${readmeData.title}

## Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[License](#liscense)
-[Contributing](#contributing)
-[Tests](#tests)
-[Questions](#questions)

## Installation
*${readmeData.install}

## Usage
${readmeData.usage}

## License
${readmeData.license}

## Contributing
${readmeData.contributors}
## Tests
${readmeData.tests}

## Questions
https://github.com/${readmeData.github}

Email me @ ${readmeData.email} for any additional questions.
    `
}