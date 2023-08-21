export interface Usuario {
  nombreCompleto?:string;
  
  genero?: string;
  grado: {
    type: Number,
    enum: gradoEnum,
    required: [true, "El grado es requerido."],
  },
  email?: string;
  password?: string;
  edad?:number
  TAT:[{lamina:string,texto:string}]
}

export type BackdropType = "opaque" | "blur" | "transparent" | undefined