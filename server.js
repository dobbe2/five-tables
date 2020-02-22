const express = require("express");
const path = require("path")
const app = express();
const PORT = 3000;

// List class
class Reservation {
    constructor(name, phoneNumber, Email, uniqueID) {
        this.list = {
            "name": name,
            "phoneNumber": phoneNumber,
            "email": Email,
            "uniqueID": uniqueID,
        };
    }
};

let tablesArr = [];
let waitlistArr = [];

function addToTables() {
    if (tablesArr.length <= 5) {
        const tainer = new Reservation("josh", 123, "123@gmail.com", 69420);
        tablesArr.push(tainer); // tainer is an object here
        console.log(tablesArr);
    } else {
        const reserve = new Reservation("James", 456, "235@gmail.com", 123454)
        waitlistArr.push(reserve);
        console.log(waitlistArr);
    }
}
addToTables();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  //route for styles.css
app.get("/styles.css", function(req, res) {
    res.sendFile(path.join(__dirname, "styles.css"));
})

// When user does a GET or visits the /api/tables page on our
// site, return our tables array
app.get("/api/tables", function(req, res) {
    return res.json(tablesArr);
});

// When user does a GET or visits the /api/waitlist page on our
// site, return our waitlist array

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlistArr);
});

app.post("/api/tables", function(req, res) {
    let newReservation = req.body;
    console.log(newReservation);
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


// Backend Logic

// View Reservations


// Make Reservation
    // Form data for 