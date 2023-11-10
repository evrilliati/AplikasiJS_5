const nameModule = require('./nameModule');
const ageModule = require('./ageModule.js');
const addressModule = require('./addressModule');
const birthdateModule = require('./birthdateModule');

const firstName = 'Tasya';
const lastName = 'E';
const userAge = 23;
const street = 'Cibolang';
const city = 'Sukabumi';
const country = 'Jawa barat';
const birthDay = 15;
const birthMonth = 5;
const birthYear = 1990;

const fullName = nameModule.getName(firstName, lastName);
console.log('Nama lengkap: ' + fullName);

const ageInfo = ageModule.getAge(userAge);
console.log(ageInfo);

const addressInfo = addressModule.getAddress(street, city, country);
console.log(addressInfo);

const birthdateInfo = birthdateModule.getBirthdate(birthDay, birthMonth, birthYear);
console.log(birthdateInfo);
