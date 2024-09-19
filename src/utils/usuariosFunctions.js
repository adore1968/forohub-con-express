import pool from "../db.js";
import { compareClave, encriptarClave } from "../libs/bcrypt.js";
import { signToken } from "../libs/jwt.js";

export const getUsuario = async (id, username) => {
  const sql = "SELECT * FROM usuarios WHERE id = ? OR username = ?";
  const values = [id, username];
  const [rows, fields] = await pool.query(sql, values);
  const usuario = rows[0];
  if (!usuario) {
    throw new Error("No se ha podido encontrar al usuario");
  }
  return usuario;
};

export const registrarUsuario = async (data) => {
  const hashPassword = await encriptarClave(data.clave);
  const sql = "INSERT INTO usuarios(username, clave) VALUES(?, ?)";
  const values = [data.username, hashPassword];
  const [result, fields] = await pool.query(sql, values);
  const usuario = await getUsuario(result.insertId, null);
  const token = await signToken(usuario.id);
  return { id: usuario.id, username: usuario.username, token };
};

export const validarRegistroUsuario = async (data) => {
  const sql = "SELECT * FROM usuarios WHERE username = ?";
  const [rows, fields] = await pool.query(sql, [data.username]);
  if (rows.length >= 1) {
    throw new Error("Ya existe un usuario con ese username");
  }
  return registrarUsuario(data);
};

export const loginUsuario = async (data) => {
  const usuario = await getUsuario(null, data.username);
  const res = await compareClave(data.clave, usuario.clave);
  if (!res) {
    throw new Error("La contraseña no es correcta");
  }
  const token = await signToken(usuario.id);
  return { id: usuario.id, username: usuario.username, token };
};
