var sqlite3 = require("sqlite3").verbose();
var db;
function openDatabase() {
    db = new sqlite3.Database("../model/eshol-db.db", sqlite3.OPEN_READONLY, function (err) {
        if (err) {
            return console.error(err.message);
        }
        console.log("Connected to the in-memory SQlite database.");
    });
}
function filterData() {
    db.serialize(function () {
        db.each("SELECT profileID as id, aircraftID as name FROM tblProfile;", function (err, row) {
            if (err) {
                console.error(err.message);
            }
            console.log(row.id + "\t" + row.name);
        });
    });
}
function closeDatabase() {
    db.close(function (err) {
        if (err) {
            return console.error(err.message);
        }
        console.log("Close the database connection.");
    });
}
