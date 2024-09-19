import { verifyToken } from "../libs/jwt.js";

const authRequiredMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const decoded = await verifyToken(authorization);
    req.usuario = decoded.id;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default authRequiredMiddleware;
