import mongoose from  'mongoose';

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    diagnoseWith:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    bloodgroup: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "other"],
        required: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    }


},{timestamps: true})

export const Patient = mongoose.model("Patient", patientSchema)