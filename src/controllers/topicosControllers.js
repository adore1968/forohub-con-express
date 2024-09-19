import {
  deleteTopico,
  getTopico,
  getTopicos,
  updateTopico,
  validarRegistroTopico,
} from "../utils/topicosFunctions.js";

export const registrarTopicoController = async (req, res) => {
  try {
    const data = req.body;
    const topico = await validarRegistroTopico(data);
    return res.status(201).json(topico);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTopicosController = async (req, res) => {
  try {
    const topicos = await getTopicos();
    return res.json(topicos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTopicoController = async (req, res) => {
  try {
    const { id } = req.params;
    const topico = await getTopico(id);
    if (!topico) {
      return res
        .status(404)
        .json({ message: "No se ha podido encontrar el topico" });
    }
    return res.json(topico);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTopicoController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedTopico = await updateTopico(data, id);
    console.log(updatedTopico);

    if (!updatedTopico) {
      return res
        .status(400)
        .json({ message: "No se ha podido actualizar el topico" });
    }
    return res.json(updatedTopico);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTopicoController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteTopico(id);
    if (!result) {
      return res
        .status(400)
        .json({ message: "No se ha podido eliminar el topico" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
