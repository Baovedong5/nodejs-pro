// Get the client
import mysql from "mysql2/promise";

const getConnection = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "laptopshop",
    password: "123456",
    port: 3306,
  });

  return connection;
};

export default getConnection;
