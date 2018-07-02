let db: any;
var worker: any;
var error: any;

function openDatabase(): any {
    // db = new sql.Database("../model/eshol-db.db", sql.OPEN_READONLY, (err: Error) => {
    //     if (err) {
    //         return console.error(err.message);
    //     }
    //     console.log("Connected to the in-memory SQlite database.");
    // });
    worker = new Worker("../assets/js/worker.sql.js");
    worker.onerror = error;
    worker.postMessage({action:"open"});
    return worker;
}

function filterData(filter: string): void {
    db.serialize(() => {
        db.each(
            // tslint:disable-next-line:max-line-length
            filter // "SELECT profileID as id, aircraftID as name FROM tblProfile;"
            , (err: Error, row: any) => {
                if (err) {
                    console.error(err.message);
                }
                console.log(row.id + "\t" + row.name);
            });
    });
}

function closeDatabase(db: any): void {
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Close the database connection.");
    });
}