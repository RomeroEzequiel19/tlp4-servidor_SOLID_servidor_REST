import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
    id: String,
    nombre: String,
    email: String,
    telefono: String,
});

export default mongoose.model('Client', ClientSchema);
