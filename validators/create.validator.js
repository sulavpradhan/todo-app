import Joi from "joi";

const createSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  date: Joi.date().min(new Date()),
});

const createTodoValidator = async (req, res, next) => {
  try {
    await createSchema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(400).send(error);
  }
};

export { createTodoValidator };
