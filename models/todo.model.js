import mongoose from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Todo", todoSchema);
