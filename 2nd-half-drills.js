'use strict';
// Object exercise 05

// Object 04 EXERCISE

const softwareEngi = [
  {
    name: 'Brad',
    jobTitle: 'Intern',
    boss: 'developer'
  },
  {
    name: 'Jess',
    jobTitle: 'Boss'
  },
  {
    name: 'Sacha',
    jobTitle: 'developer',
    boss: 'boss'
  }
] 
  
for (const obj in softwareEngi) {
    if (softwareEngi[obj].boss === undefined){
        console.log(`"${softwareEngi[obj].jobTitle} ${softwareEngi[obj].name} doesn't report to anybody."`)
    } else {
  console.log(`"${softwareEngi[obj].jobTitle} ${softwareEngi[obj].name} reports to ${softwareEngi[obj].boss}."`);
}
}