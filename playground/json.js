// var obj = {
//     name: 'Leon'
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{ "name": "leon", "age": 21 }';
// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

const fs = require('fs')

var originalNote = {
    title: 'Some title',
    body: 'Some Body'
}

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
// convert to JSON for reading value pair

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(`title: ${note.title} +  body: ${note.body}`)