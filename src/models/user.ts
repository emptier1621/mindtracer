import { Schema, model, models } from 'mongoose';
import { list } from 'postcss';

const generoEnum = ['M', 'F'];
const gradoEnum = [1, 2, 3, 4, 5];

const usuarioSchema = new Schema({
  nombreCompleto: {
    type: String,
    required: [true, "El nombre completo es requerido."],
    minLength: [5, "El nombre completo debe tener al menos 5 caracteres."],
    maxLength: [50, "El nombre completo debe tener como máximo 50 caracteres."]
  },
  genero: {
    type: String,
    enum: generoEnum,
    required: [true, "El genero es requerido."],
  },
  grado: {
    type: Number,
    enum: gradoEnum,
    required: [true, "El grado es requerido."],
  },
  email: {
    type: String,
    required: [true, "El email es requerido."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "La contraseña es requerida."],
  },
  edad: {
    type: Number,
    required: [true, "La edad es requerida."],
  },
  tatRespuestas: {
    type: [String],
  },
  idb: {
    type: [Number]
  },
});

const user = models.User || model('User', usuarioSchema);

export default user;
