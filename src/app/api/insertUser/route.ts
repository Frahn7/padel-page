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

  const { name, height, points, racket, site, type, wins } = body;

  const query =
    "INSERT INTO `data_users`(name,height,points,racket,site,type,wins) VALUES (?,?,?,?,?,?,?) ";
  const values = [name, height, points, racket, site, type, wins];

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
      message: "Usuario creado correctamente",
      results,
    });
  } catch (error) {
    console.error("Error executing query", error);
    return Response.json({ error });
  } finally {
    connection.end();
  }
}
