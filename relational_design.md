## My Relational Design for the Student Success Hub

Design for the Student Table:

Student Table{ 
    StudentID - PRIMARY KEY
    FirstName - NOT NULL
    LastName - NOT NULL
    Email - NOT NULL
    Program - NOT NULL
    Major - NOT NULL
}

Design for the AdvisingNote Table:

AdvisingNote Table{
    NoteID - PRIMARY KEY
    StudentID - FOREIGN KEY
    NoteText - NOT NULL
    NoteDate - NOT NULL
    AdvisorName - NOT NULL
    Category - NOT NULL
}

The AdvisingNote Table connects to the Student Table through StudentID.
AdvisingNote.StudentID references Student.StudentID

Design for the SupportVisit Table:

SupportVisit Table{
    SupportID - PRIMARY KEY
    StudentID - FOREIGN KEY
    SupportDate - NOT NULL
    ServiceType - NOT NULL
    ServiceNotes - NOT NULL
}

The SupportVisit Table connects to the Student Table through StudentID.
SupportVisit.StudentID references Student.StudentID.


Explanation:
I chose to design the relational database using three different tables with primary and foreign keys to keep the data organized and consistent. The Student table and AdvisingNote table are connected through StudentID, as AdvisingNote.StudentID references
Student.StudentID. The AdvisingNote table has NoteID as its primary key so that each advising note can be uniquely identified, and multiple advising notes can belong to one student. The SupportVisit table is connected to the Student table through StudentID, as SupportVisit.StudentID references Student.StudentID. The SupportVisit table has SupportID as its primary key so that each support visit can be uniquely identified, and each student can have multiple support visits.