const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

// Class will accept a name, id, email, and github username

const testManager = {name: 'test', id: 1, email: 'email@email.com', officeNumber: 1};

test('Check required properties for a manager', () => {
    const newManager = new Manager(testManager);
    const testName = 'test';
    const testID = 1;
    const testEmail = 'email@email.com';
    const testOffice = 1;
    expect(newManager.name).toMatch(testName);
    expect(newManager.id).toEqual(testID);
    expect(newManager.email).toMatch(testEmail);
    expect(newManager.officeNumber).toEqual(testOffice);
});

test('Check employee role', () => {
    const newManager = new Manager(testManager);
    expect(newManager.getRole()).toMatch('Manager');
});