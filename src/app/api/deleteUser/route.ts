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

  const id = searchParams.get("id");
  const token = searchParams.get("token");

  const queryDelete = "DELETE FROM `data_users` WHERE id=?";

  const query = "SELECT admin FROM users WHERE token=?";
  try {
    const isAdmin: any = await new Promise((resolve, reject) => {
      connection.query(query, token, (err, res) => {
        if (err) {
          reject(err);
        } else resolve(res);
      });
    });

    if (isAdmin[0].admin === "si") {
      const results = await new Promise((resolve, reject) => {
        connection.query(queryDelete, id, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
      return Response.json({ results });
    } else
      return Response.json({
        message: "No tiene permisos para realizar esta acccion",
      });
  } catch (error) {
    console.error("Error executing query", error);
    return Response.json({ error });
  } finally {
    connection.end();
  }
}
