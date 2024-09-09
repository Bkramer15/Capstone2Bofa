const mysql = require('mysql2'); // MySQL library
const cors = require('cors'); // CORS middleware
const express = require('express'); // Express framework
const bcrypt = require('bcryptjs');// installed password hashing 


const app = express();
const PORT = 8081;

app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
  })
);

app.use(express.json()); // To parse JSON bodies



// Create MySQL connections for both the login and user name table
const dbCapstone = mysql.createConnection({
  host: "database-1.c1wsgik4mf8z.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "xwlsfQL76x",
  database: "CapstoneBofa",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: 3306,
});


//Create MySQL connection for all the volunteering oppurtinities
const dbVolunteering = mysql.createConnection({
  host: "database-1.c1wsgik4mf8z.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "xwlsfQL76x",
  database: "Volunteering",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: 3306,
});


//Create MYSQL connection for all the Donations

const dbDonation  = mysql.createConnection({
  host: 'database-1.c1wsgik4mf8z.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'xwlsfQL76x',
  database: 'Donations', //storing database in it called Doantion
  waitForConnections: true,
  connectionLimit: 10,
  queuelimit: 0,
  port: 3306
})


//create mySQL connection for the newsletter
// const dbNewsletter = mysql.createConnection({
//   host: 'my-donation-db.cjm6ce8cikky.us-east-1.rds.amazonaws.com',
//   user:'admin',
//   password:'qBDiSihbNAICSeX0RR8P',
//   database: 'Newsletter',
//   waitForConnection: 10,
//   connectionLimit: 10,
//   port: 3306
// })



// Test the DB connections for the capstoneBOFA database (user and log in tables)
dbCapstone.connect((err) => {
  if (err) {
    console.error("Error connecting to the CapstoneBofa database:", err);
  } else {
    console.log("Connected to the CapstoneBofa database");
  }
});

//Test te DB connectiosn for the volunteering databsse 
dbVolunteering.connect((err) => {
  if (err) {
    console.error("Error connecting to the Volunteering database:", err);
  } else {
    console.log("Connected to the Volunteering database");
  }
});

//Test the DB conections for the Doantions database
dbDonation.connect((err) => {
  if(err){
    console.error("Error connection to the Donation database:", err);
  }else{
    console.log("Connected to the Donation database");
  }
})


// //Test the DB connection for Newsletter Donations
// dbNewsletter.conect((err) => {
//   if(err){
//     console.error("Error connection to Newsletter database:", err)
//   }else{
//     console.log("Connected to the Newsletter database");  
//   }
// })


// User registration
app.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log('form data', req.body);

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error hashing password');
    }

    // Insert user into the database with role set to 'admin'
    const query = "INSERT INTO users (first_name, last_name, email, password_hash, role) VALUES (?, ?, ?, ?, 'user')";
    dbCapstone.query(query, [firstName, lastName, email, hashedPassword], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error inserting data');
      }
      res.status(200).json(result);
    });
  });
});


// User login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM users WHERE email = ?";
  dbCapstone.query(query, [email], (err, results) => {
      if (err) {
          console.error(err);
          return res.status(500).send('Error retrieving user');
      }

      if (results.length === 0) {
          return res.status(401).send('Invalid credentials');
      }

      const user = results[0];
      bcrypt.compare(password, user.password_hash, (err, isMatch) => {
          if (err) {
              console.error(err);
              return res.status(500).send('Error comparing passwords');
          }

          if (!isMatch) {
              return res.status(401).send('Invalid credentials');
          }

          res.status(200).json(user);
          user.is_adim
      });
  });
});



//Writing a post request for Donation page to store information in the database
app.post('/Donation', (req,res) => {
  const{firstName, lastName, email, donationCategory, company, paymentMethod, comments } = req.body; // store the  information inside the request body so it can be passed to the databse
  const query = "INSERT INTO Donations (First_Name, Last_Name, Email, Donation_Category, Company, Payment_Method, Comments) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const results  = dbDonation.query(query, [firstName, lastName, email, donationCategory, company, paymentMethod, comments], (err, results) => {
    if(err){
      console.error(err);
      return res.status(500).send('Error posting Donation Data');
    }
    res.status(200).json(results)
  })
})


//Writiing a post request for Newsletter page to store informatiion in DB
app.post("/subscribe", (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res
      .status(400)
      .send({ error: true, message: "Please provide an email" });
  }

  db.query(
    "INSERT INTO newsletter_subscribers (email) VALUES (?)",
    [email],
    (err, result) => {
      if (err) {
        console.error("Failed to insert email: " + err.stack);
        return res
          .status(500)
          .send({ error: true, message: "Database query failed" });
      }
      res.send({ error: false, message: "Subscription successful" });
    }
  );
});

// Beginning test route to make sure that port is working
app.get('/', (req, res) => {
    res.json('Welcome to the backend');
});

// Registration endpoint (for testing purposes) - CapstoneBofa DB
app.get("/register", (req, res) => {
  dbCapstone.query("SELECT * FROM users", (err, results) => {
    if (err) {
      return res.status(500).send("Error retrieving data");
    }
    res.json(results);
  });
});

// Login endpoint (for testing purposes) - CapstoneBofa DB
app.get("/login", (req, res) => {
  dbCapstone.query("SELECT * FROM users", (err, results) => {
    if (err) {
      return res.status(500).send("Error retrieving data");
    }
    res.json(results);
  });
});


// Volunteering data endpoint (for testing purposes) - Volunteering DB
app.get('/volunteering', (req, res) => {
    dbVolunteering.query('SELECT * FROM Volunteering', (err, results) => {
        if (err) {
            console.log("hello")
            return res.status(500).send('Error retrieving data');
        }
        res.json(results);
    });
});


//get request for Donation endpoint
app.get('/Donation', (req, res) => {
  dbDonation.query('SELECT * FROM Donations', (err, results) => {
    if(err){
      return res.status(500).send("Error retrieving data");
    }
    res.json(results)
  })
})


//get request for Newsletter endpoint
app.get('/subscribe', (req,res) => {
  dbNewsletter.query('SELECT * FROM Newsletter', (err, results) => {
    if(err){
      return res.status(500).send('Error retrieving data');
    }
    res.json(results);
  })
})

// Start server
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
