import mongoose from 'mongoose';

const VehicleSchema = new mongoose.Schema({
    id: String,
    marca: String,
    modelo: String,
    año: Number,
    precio: Number,
});

export default mongoose.model('Vehicle', VehicleSchema);
