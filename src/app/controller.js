var db;
function openDatabase() {
    db = new sql.Database("../model/eshol-db.db", sql.OPEN_READONLY, function (err) {
        if (err) {
            return console.error(err.message);
        }
        console.log("Connected to the in-memory SQlite database.");
    });
    return db;
}
function filterData(filter) {
    db.serialize(function () {
        db.each(filter, function (err, row) {
            if (err) {
                console.error(err.message);
            }
            console.log(row.id + "\t" + row.name);
        });
    });
}
function closeDatabase(db) {
    db.close(function (err) {
        if (err) {
            return console.error(err.message);
        }
        console.log("Close the database connection.");
    });
}
