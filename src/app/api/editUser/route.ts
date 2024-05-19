import { createPool } from "mysql2";

export async function POST(request: Request) {
  const connection = createPool({
    host: process.env.HOST,
    port: 44139,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
  });

  const body = await request.json();

  const { height, points, raquet, site, type, wins, id } = body;

  const query =
    "UPDATE `data_users` SET height = '?', points = '?', racket = '?', site = '?', type = '?', wins = '?' WHERE id = ?";

  const values = [height, points, raquet, site, type, wins, id];

  try {
    const results = await new Promise((resolve, reject) => {
      connection.query(query, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
    return Response.json({
      message: "Usuario actualizado correctamente",
      results,
    });
  } catch (error) {
    console.error("Error executing query", error);
    return Response.json({ error });
  } finally {
    connection.end();
  }
}
