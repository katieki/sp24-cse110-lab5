// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//isPhoneNumber
test('123-456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('(123) 456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('123-456-789 is not a valid phone number', () => {
  expect(isPhoneNumber('123-456-789')).toBe(false);
});
test('123 456 7890 is not a valid phone number', () => {
  expect(isPhoneNumber('123 456 7890')).toBe(false);
});

//isEmail
test('frog@gmail.com is a valid email', () => {
  expect(isEmail('frog@gmail.com')).toBe(true);
});
test('frog@email.com is a valid email', () => {
  expect(isEmail('frog@email.com')).toBe(true);
});
test('frogemail.com is not a valid email', () => {
  expect(isEmail('frogemail.com')).toBe(false);
});
test('frog@emailcom is not a valid email', () => {
  expect(isEmail('frog@emailcom')).toBe(false);
});

//isStrongPassword
test('Password123 is a valid strong password', () => {
  expect(isStrongPassword('Password123')).toBe(true);
});
test('Password_123 is a valid strong password', () => {
  expect(isStrongPassword('Password_123')).toBe(true);
});
test('password123~ is not a valid strong password', () => {
  expect(isStrongPassword('password123~')).toBe(false);
});
test('pw is not a valid strong password', () => {
  expect(isStrongPassword('pw')).toBe(false);
});

//isDate
test('12/12/2002 is a valid date', () => {
  expect(isDate('12/12/2002')).toBe(true);
});
test('4/12/2003 is a valid date', () => {
  expect(isDate('4/12/2003')).toBe(true);
});
test('4/1/200 is not a valid date', () => {
  expect(isDate('4/1/200')).toBe(false);
});
test('4-12-2003 is not a valid date', () => {
  expect(isDate('4-12-2003')).toBe(false);
});

//isHexColor
test('fc9 is a valid hex color', () => {
  expect(isHexColor('fc9')).toBe(true);
});
test('#ABCDEF is a valid hex color', () => {
  expect(isHexColor('#ABCDEF')).toBe(true);
});
test('#aBc3F is not a valid hex color', () => {
  expect(isHexColor('#aBc3F')).toBe(false);
});
test('abg is not a valid hex color', () => {
  expect(isHexColor('abg')).toBe(false);
});