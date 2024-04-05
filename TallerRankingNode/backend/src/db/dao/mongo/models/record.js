import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
    player: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Record = mongoose.model("Record", recordSchema);

export default Record;
