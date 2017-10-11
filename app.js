console.log('Starting app.js')

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
// console.log(process.argv);

// console.log('Command: ', command);
// console.log('Yargs', argv);

if (command == 'add') {
    var note = notes.addNote(argv.title, argv.body);
    !note ? console.log("there was a problem") : console.log(`sucessfully written : ${note.title}`);
} else if (command === 'list') {
    notes.listNotes();
} else if (command === 'read') {
   var note = notes.getNote(argv.title);
    note ? notes.logNote(note)  : console.log("note not found");
} else if (command === 'remove') {
    var noteRemoved = notes.deleteNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('command not recognized');
}
