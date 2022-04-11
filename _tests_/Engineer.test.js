const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

// Class will accept a name, id, email, and github username

const testEngineer = {name: 'test', id: 1, email: 'email@email.com', github: 'test'};

test('Check required properties for an engineer', () => {
    const newEngineer = new Engineer(testEngineer);
    const testName = 'test';
    const testID = 1;
    const testEmail = 'email@email.com';
    const testGithub = 'test';
    expect(newEngineer.name).toEqual(testName);
    expect(newEngineer.id).toEqual(testID);
    expect(newEngineer.email).toEqual(testEmail);
    expect(newEngineer.github).toEqual(testGithub);
});

test('Check employee role', () => {
    const newEngineer = new Engineer(testEngineer);
    expect(newEngineer.getRole()).toMatch('Engineer');
});