

// Select the database to use.
use('RautDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  {
    "name": "java",
    "price": "20k",
    "instructor": "harry"
  },
  {
    "name": "python",
    "price": "25k",
    "instructor": "emma"
  },
  {
    "name": "javascript",
    "price": "22k",
    "instructor": "john"
  },
  {
    "name": "c++",
    "price": "18k",
    "instructor": "alice"
  },
  {
    "name": "data science",
    "price": "30k",
    "instructor": "sophia"
  },
  {
    "name": "web development",
    "price": "24k",
    "instructor": "mike"
  },
  {
    "name": "machine learning",
    "price": "35k",
    "instructor": "oliver"
  }
]
);

// Print a message to the output window.
console.log(`done inserting data`);
