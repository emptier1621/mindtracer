import { Schema, model, models } from 'mongoose'
const generoEnum = ['M', 'F'];
const gradoEnum = [1, 2, 3, 4, 5];
const clasificacionEnum = [1,2,3,4]

export const usuarioSchema = new Schema({
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
    select: false
  },
  edad: {
    type: Number,
    required: [true, "La edad es requerida."],
  },
  TAT: {
    type: Array<{
      lamina: {
        type: Number,
        required: [true, "El número de lamina es requerido."]
      }
      text: {
        type: String,
        required: [true, "La respuesta es requerida."]
      },
    }>,
    select: false
  },
  IDB: {
      puntaje: {
        type: Number
      },
      clasificacion: {
        type:Number
      },
      respuestas: {
        type: Array<{
          sintoma:{
            type: String,
            required: true
          },
          intensidad:{
            type:Number,
            required:true
          }
        }>,
      },
  }
});

const user = models.User || model('User', usuarioSchema);

export default user;
