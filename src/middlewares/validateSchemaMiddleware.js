const validateSchemaMiddleware = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      error: error.errors.map((err) => {
        return {
          field: err.path[0],
          message: err.message,
        };
      }),
    });
  }
};

export default validateSchemaMiddleware;
