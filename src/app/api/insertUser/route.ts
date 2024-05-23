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

  const { name, height, points, racket, site, type, wins, token } = body;

  const allowQuery = "SELECT admin FROM users WHERE token=?";

  const query =
    "INSERT INTO `data_users`(name,height,points,racket,site,type,wins) VALUES (?,?,?,?,?,?,?) ";
  const values = [name, height, points, racket, site, type, wins];

  try {
    const allow: any = await new Promise((resolve, reject) => {
      connection.query(allowQuery, token, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    const admin = allow[0].admin;
    if (admin === "si") {
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
    } else {
      return Response.json({
        message: "No tiene permisos de administrador",
      });
    }
  } catch (error) {
    console.log(error);
    return Response.json({
      message: "Ocurrió un error",
      error,
    });
  } finally {
    connection.end();
  }
}
