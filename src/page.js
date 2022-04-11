const fs = require('fs');

function generateEmployee(input) {
    ({name, id, email, officeNumber, school, github} = input)
    
    let unique;

    if (officeNumber) {
        unique = `Office: ${officeNumber}`;
    }

    if (school) {
        unique = `School: ${school}`;
    }

    if (github) {
        unique = `GitHub: ${github}`;
    }

    let cardContent = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title"> ${name} </h5>
            <h6 class="card-subtitle mb-2 text-muted"> ${input.constructor.name} </h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> ID: ${id} </li>
                    <li class="list-group-item">Email: ${email} </li>
                    <li class="list-group-item"> ${unique} </li>
                </ul>
        </div>
    </div>
    `
    return cardContent;
}

function generateCards(input) {
    let employees = '';
    for (i = 0; i < input.length; i++) {
        employees += generateEmployee(input[i]);
    }
    return employees;
}

module.exports = function (input) {
    let template = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
        <div class="container">
            <div class="jumbotron text-center">
                <h1>My Team</h1>
            </div>
        </div>
    
        <div class="container" id="employee-cards">

            ${generateCards(input)}

        </div>
    </body>
    </html>
    `

    new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', template, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });          
        });
    });
}