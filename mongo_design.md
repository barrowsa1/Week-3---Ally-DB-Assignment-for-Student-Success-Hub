## My MongoDB Document Design

My Collection:
- Student Collection

Within the Student collection, advising notes and support visits will be embedded with their corresponding data. The Student collection will hold StudentID, FirstName, LastName, Email, Program, and Major, along with the embedded NoteID, NoteText, NoteDate, AdvisorName, Category, SupportID, SupportDate, ServiceType, and ServiceNotes.

The collection runs similar to the relational database design. However, there isn't as much protection in place to make sure the data is inputted properly, which is one of the trade-offs between NoSQL databases and relational databases.

JSON Sample document:
{
  "studentId": 1,
  "firstName": "Ally",
  "lastName": "Barrows",
  "email": "abarrows@example.com",
  "program": "Engineering",
  "major": "Computer Science",
  "AdvisorNotes": [
    {
      "noteId": 1,
      "noteText": "Talked about course registration and classes needed.",
      "noteDate": "2026-09-23",
      "advisorName": "John Doe",
      "category": "Academic plan"
    }
  ],
  "SupportVisits": [
    {
      "supportId": 1,
      "supportDate": "2026-09-24",
      "serviceType": "Tutoring",
      "serviceNotes": "Received tutoring on Java programming."
    }
  ]
}

Explanation:
I chose to embed the AdvisingNotes and SupportVisits into the Student collection because they are all connected together and tied to one specific student. Instead of using StudentID to connect them from separate tables or collections, the information can all be easily accessed and edited depending on what it is being used for. This will cause consistency within the system to be harder to maintain because we are gaining more flexibility within the system, as the CAP theorem explains.
