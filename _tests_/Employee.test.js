const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

// Class will accept a name, id, and email

test('Check required properties for an employee', () => {
    const testEmployee = new Employee('name', 123, 'email@email.com');
    const testName = 'name';
    const testID = 123;
    const testEmail = 'email@email.com';
    expect(testEmployee.name).toEqual(testName);
    expect(testEmployee.id).toEqual(testID);
    expect(testEmployee.email).toEqual(testEmail);
});

test('Check employee role', () => {
    const testEmployee = new Employee('name', 123, 'email@email.com');
    expect(testEmployee.getRole()).toMatch('Employee');
});