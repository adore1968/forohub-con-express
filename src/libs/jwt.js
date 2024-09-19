import jwt from "jsonwebtoken";

const privateKey = process.env.PRIVATE_KEY;

export const signToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign({ id: payload }, privateKey, function (err, token) {
      if (err) reject(err);
      resolve(token);
    });
  });
};

export const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, privateKey, function (err, decoded) {
      if (err) reject(err);
      resolve(decoded);
    });
  });
};
