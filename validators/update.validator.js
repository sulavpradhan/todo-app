import Joi from "joi";

const filterSchema = Joi.object({
  _id: Joi.string().alphanum().required(),
});

const updateSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  date: Joi.date().min(new Date()),
  done: Joi.boolean(),
});

const updateTodoValidator = async (req, res, next) => {
  try {
    await filterSchema.validateAsync(req.query);
    await updateSchema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(400).send(error);
  }
};

export { updateTodoValidator };
