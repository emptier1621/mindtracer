export interface Link {
  link: string
  name: string
}

export interface ButtonProps {
  text: string
  link: string
}

export interface FormBtnProps {
  text: string
  type: string
}

export interface InpProps {
  text: string
  type: string
  placeholder: string
  name: string
}

export interface UsuarioProps {
  nombreCompleto: string;
  genero: 'M' | 'F';
  grado: 1 | 2 | 3 | 4 | 5;
  email: string;
  password: string;
  edad: number;
  TAT: Array<{
    lamina: number;
    text: string;
  }>;
}