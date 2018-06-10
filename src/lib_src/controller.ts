const sqlite3: any = require("sqlite3").verbose();

let db: any;

function openDatabase():void {
    db = new sqlite3.Database("../model/eshol-db.db", sqlite3.OPEN_READONLY, (err: Error) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Connected to the in-memory SQlite database.");
    });
}

function filterData():void  {
    db.serialize(() => {
        db.each(
            // tslint:disable-next-line:max-line-length
            "SELECT profileID as id, aircraftID as name FROM tblProfile;"
            , (err: Error, row: any) => {
                if (err) {
                    console.error(err.message);
                }
                console.log(row.id + "\t" + row.name);
            });
    });
}

function closeDatabase(): void {
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Close the database connection.");
    });
}