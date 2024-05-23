import { createPool } from "mysql2";
import bcrypt from "bcryptjs";
import crypto from "crypto";

interface User {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const connection = createPool({
    host: process.env.HOST,
    port: 44139,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
  });

  const body = await request.json();

  const { email, password } = body.user;

  const queryGet = "SELECT * FROM users WHERE email=?";

  function generateToken(length: any) {
    return crypto.randomBytes(length).toString("hex");
  }
  const tokenLength = 6;
  const token = generateToken(tokenLength);

  try {
    const results: User[] = await new Promise((resolve, reject) => {
      connection.query(queryGet, email, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results as User[]);
        }
      });
    });

    if (results.length === 0) {
      return new Response(
        JSON.stringify({
          message: "no hay correo registrado",
        }),
        { status: 404 }
      );
    }

    const passwordHash = results[0].password;
    const isMatch = await bcrypt.compare(password, passwordHash);

    if (isMatch) {
      const queryToken = "UPDATE users SET token = ? WHERE email = ?";
      const valuesToken = [token, email];

      const result = await new Promise((resolve, reject) => {
        connection.query(queryToken, valuesToken, (err, result) => {
          if (err) {
            reject(err);
          } else resolve(result);
        });
      });
      return Response.json({
        message: true,
        token,
      });
    } else {
      return Response.json({
        message: "Las contraseñas no coinciden",
      });
    }
  } catch (error) {
    console.error("Error executing query", error);
    return Response.json(error);
  } finally {
    connection.end();
  }
}
