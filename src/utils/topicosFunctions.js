import pool from "../db.js";

export const getTopico = async (id) => {
  const sql = "SELECT * FROM topicos WHERE id = ?";
  const [rows, fields] = await pool.query(sql, [id]);
  return rows[0];
};

export const registrarTopico = async (data) => {
  const sql =
    "INSERT INTO topicos(titulo, mensaje, fecha_creacion, estatus, autor, curso) VALUES(?, ?, ?, ?, ?, ?)";
  const values = [
    data.titulo,
    data.mensaje,
    data.fechaDeCreacion,
    data.estatus,
    data.autor,
    data.curso,
  ];
  const [result, fields] = await pool.query(sql, values);
  return getTopico(result.insertId);
};

export const validarRegistroTopico = async (data) => {
  const sql = "SELECT * FROM topicos WHERE titulo = ? AND mensaje = ?";
  const values = [data.titulo, data.mensaje];
  const [rows, fields] = await pool.query(sql, values);
  if (rows.length >= 1) {
    throw new Error("Ya existe un topico con ese titulo y/o mensaje");
  }
  return registrarTopico(data);
};

export const getTopicos = async () => {
  const sql = "SELECT * FROM topicos";
  const [rows, fields] = await pool.query(sql);
  return rows;
};

export const updateTopico = async (data, id) => {
  const sql =
    "UPDATE topicos SET titulo = ?, mensaje = ?, fecha_creacion = ?, estatus = ?, autor = ?, curso = ? WHERE id = ?";
  const values = [
    data.titulo,
    data.mensaje,
    data.fechaDeCreacion,
    data.estatus,
    data.autor,
    data.curso,
    id,
  ];
  const [result, fields] = await pool.query(sql, values);
  if (result.affectedRows >= 1) {
    const updatedTopico = await getTopico(id);
    return updatedTopico;
  }
  return null;
};

export const deleteTopico = async (id) => {
  const sql = "DELETE FROM topicos WHERE id = ? LIMIT 1";
  const [result, fields] = await pool.query(sql, [id]);
  if (result.affectedRows >= 1) return true;
  return false;
};
