import { createPool } from "mysql2";

export async function GET(request: Request) {
  const connection = createPool({
    host: process.env.HOST,
    port: 44139,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
  });

  const { searchParams } = new URL(request.url);

  const token = searchParams.get("token");

  const query = "SELECT admin FROM users WHERE token=?";
  try {
    const results = await new Promise((resolve, reject) => {
      connection.query(query, token, (error, results) => {
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
