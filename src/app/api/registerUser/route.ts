import { createPool } from "mysql2";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const connection = createPool({
    host: process.env.HOST,
    port: 44139,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
  });

  const body = await request.json();

  const { name, mail, password } = body;

  const saltRounds = 7;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const query = "INSERT INTO users(name,email,password) VALUES (?,?,?) ";
  const values = [name, mail, hashedPassword];

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
