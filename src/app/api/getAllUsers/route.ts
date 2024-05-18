import { createPool } from "mysql2";

export async function GET() {
  const connection = createPool({
    host: process.env.HOST,
    port: 44139,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
  });

  const query = "SELECT * FROM `data_users` WHERE 1=1";
  try {
    const results = await new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
    return Response.json({ results });
  } catch (error) {
    console.error("Error executing query", error);
    return Response.json({ error });
  } finally {
    connection.end();
  }
}
