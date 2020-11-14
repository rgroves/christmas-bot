import { Document, model, Schema } from "mongoose";

export interface UserInt extends Document {
  userId: string;
  username: string;
  inventory: {
    rare: string[];
    uncommon: string[];
    common: string[];
  };
  totalItems: number;
}

const user = new Schema({
  userId: String,
  username: String,
  inventory: Object,
  totalItems: Number,
});

export const userModel = model<UserInt>("user", user);
