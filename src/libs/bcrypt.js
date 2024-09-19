import bcrypt from "bcryptjs";

export const encriptarClave = (clave) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) reject(err);
      bcrypt.hash(clave, salt, function (err, hash) {
        if (err) reject(err);
        resolve(hash);
      });
    });
  });
};

export const compareClave = (clave, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(clave, hash, function (err, res) {
      if (err) reject(err);
      resolve(res);
    });
  });
};
