use('student_success');

// 1. Profile for StudentID 1 and all of their advising notes.
db.students.find(
  { "studentId": 1 },
  {
    "_id": 0,
    "studentId": 1,
    "firstName": 1,
    "lastName": 1,
    "email": 1,
    "program": 1,
    "major": 1,
    "advisingNotes": 1
  }
);/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("student_success");

// Create a new document in the collection.
db.getCollection("students").insertOne({

});
