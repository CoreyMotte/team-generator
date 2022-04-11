const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

// Class will accept a name, id, email, and github username

const testIntern = {name: 'test', id: 1, email: 'email@email.com', school: 'test'};

test('Check required properties for an intern', () => {
    const newIntern = new Intern(testIntern);
    const testName = 'test';
    const testID = 1;
    const testEmail = 'email@email.com';
    const testSchool = 'test';
    expect(newIntern.name).toMatch(testName);
    expect(newIntern.id).toEqual(testID);
    expect(newIntern.email).toMatch(testEmail);
    expect(newIntern.school).toMatch(testSchool);
});

test('Check employee role', () => {
    const newIntern = new Intern(testIntern);
    expect(newIntern.getRole()).toMatch('Intern');
});