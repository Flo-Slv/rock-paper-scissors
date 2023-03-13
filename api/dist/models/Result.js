import { model, Schema } from "mongoose";
const resultSchema = new Schema({
    nickName: String,
    score: Number,
    date: String,
});
export default model("Result", resultSchema);
