console.log('starting, notes.js');

const fs = require('fs');
// Function to read noted and parse to object for access
var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};
// Save note function
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

// Add Note function
var addNote = (title, body) => {
    var notes = fetchNotes(); // notes equal to result of fetchNotes function
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    };

};

var listNotes = () => {
    console.log('listing all notes');
}

var deleteNote = (title) => {
    var notes = fetchNotes()
    var amendedNotes = notes.filter((note) => note.title !== title);
    saveNotes(amendedNotes);
    return notes.length !== amendedNotes.length;
}

var getNote = (title) => {
    console.log("reading Note", title);
}

module.exports = {
    addNote,
    listNotes,
    deleteNote,
    getNote
};