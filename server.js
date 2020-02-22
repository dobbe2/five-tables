const express = require("express");
const path = require("path")
const app = express();
const PORT = 3000;

// List class
class List {
    constructor(name, phoneNumber, Email, uniqueID) {
        let list = JSON.parse(`{
            "name": name,
            "phoneNumber": phoneNumber,
            "email": Email,
            "uniqueID": uniqueID,
        }`);

        return list;
    }
};

let tablesArr = new List;
let waitlistArr = new List;
// console.log(tablesArr);

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

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
