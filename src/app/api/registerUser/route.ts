import { createPool, RowDataPacket } from "mysql2/promise";
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

  const queryCheck = "SELECT COUNT(*) as count FROM users WHERE email = ?";
  const queryInsert =
    "INSERT INTO users(name, email, password) VALUES (?, ?, ?)";
  const valuesCheck = [mail];
  const valuesInsert = [name, mail, hashedPassword];

  try {
    const [rows] = await connection.query<RowDataPacket[]>(
      queryCheck,
      valuesCheck
    );
    const emailExists = rows[0].count > 0;

    if (emailExists) {
      return new Response(
        JSON.stringify({
          message: "El correo ya está en uso.",
        })
      );
    }
    const [results] = await connection.query(queryInsert, valuesInsert);

    return new Response(
      JSON.stringify({
        results,
      })
    );
  } catch (error) {
    console.error("Error executing query", error);
    return new Response(
      JSON.stringify({ error, message: "Error al crear usuario" })
    );
  } finally {
    await connection.end();
  }
}
