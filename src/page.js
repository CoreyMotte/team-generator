const fs = require('fs');

function generateCard(input) {
    let unique;
    ({name, id, email, officeNumber, school, github} = input)
    

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
