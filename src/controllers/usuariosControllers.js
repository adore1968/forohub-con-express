import {
  getUsuario,
  loginUsuario,
  validarRegistroUsuario,
} from "../utils/usuariosFunctions.js";

export const loginUserController = async (req, res) => {
  try {
    const data = req.body;
    const usuario = await loginUsuario(data);
    return res.json(usuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const registerUserController = async (req, res) => {
  try {
    const data = req.body;
    const usuario = await validarRegistroUsuario(data);
    return res.status(201).json(usuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUserController = async (req, res) => {
  try {
    const id = req.usuario;
    const usuario = await getUsuario(id);
    return res.json({ id: usuario.id, username: usuario.username });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
