//* Notes Project
const notes = [
  {
    id: 1,
    subject: "Git and Github. Pushing and pulling files.",
    date: "April 11th, 2021",
    feeling: "confused",
    timeSpent: 480,
  },
  {
    id: 2,
    subject: "Running Javascript code in the terminal",
    date: "April 15th, 2021",
    feeling: "perplexed",
    timeSpent: 2,
  },
];

//* New Note to .push()
const noteAboutToday = {
  id: 3,
  subject: "For.. of Loops and Feeling Comfortable",
  date: "April 16th, 2021",
  feeling: "good",
  timeSpent: 15,
};

notes.push(noteAboutToday);

// console.log(notes);

//* For.. of Loop with String Interpolation
// for (note of notes) {
     // For line breaks, just use enter
//     console.log(`
//     Note ${note.id}
//     ${note.date}
//     I learned ${note.subject}
//     I spent ${note.timeSpent} minutes working on it
//     I felt ${note.feeling}
//     --------`)
// }

//* Finding a note with an If statement inside a For..of Loop
// const searchTerm = "perplexed"

// for (const note of notes) {
//     if (note.feeling === searchTerm) {
//         console.log(`On entry ${note.id} I felt ${note.feeling}`)
//     }
// }

//* Adding a New Note without an ID

// New Note without and Id
const newNote = {
  subject: "Using functions to run logic",
  date: "April 16th, 2021",
  feeling: "familiar",
  timeSpent: 30,
};

const newerNote = {
  subject: "Using functions to run logic",
  feeling: "familiar",
  timeSpent: 30,
};

// Function to Add New Note
const createNote = (noteObject) => {
  const lastIndex = notes.length - 1;
  const currentLastNote = notes[lastIndex];
  const maxId = currentLastNote.id;

  // Adding Date in a weird way
  const dateCreated = Date();
  noteObject.date = dateCreated;

  const idForNewNote = maxId + 1;
  noteObject.id = idForNewNote;

  notes.push(noteObject);
};

// Calling the Function
createNote(newNote)
createNote(newerNote);

console.log(notes);
