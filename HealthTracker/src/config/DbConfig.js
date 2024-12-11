import { createConnection } from "mysql2";

export function createConnectionObject() {
    return createConnection({
        host: 'localhost',
        user: 'root',
        password: 'cdac',
        database: 'mysql'
    });
}

export function establishConnection() {
    const connection = createConnectionObject();
    connection.connect((error) => {
        if (error) {
            console.error("Database connection failed:", error);
        } else {
            console.log("Connected to MySQL Database!");
        }
    });
    return connection;
}
