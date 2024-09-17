#!/usr/bin/env node

const fs = require('node:fs').promises;

const studentsInCourse = function * (course, details) {
  for (let x = 0; x < details.length; x++) {
    const temp = details[x].split(',');
    if (temp[temp.length - 1] === course) {
      yield temp[0];
    }
  }
};

const list = function (students) {
  const result = [];
  for (const student of students) {
    result.push(student);
  }
  return result;
};

const countStudents = async function (path) {
  try {
    const data = await fs.readFile(`${path}`, 'utf8');

    const content = data.split('\n');
    content.shift();
    content.pop();

    const csStudents = list(studentsInCourse('CS', content));
    const sweStudents = list(studentsInCourse('SWE', content));

    console.log(`Number of students: ${content.length}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${[...csStudents].join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${[...sweStudents].join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
