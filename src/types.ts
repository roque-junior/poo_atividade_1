export interface MediaFinal {
  media: number;
  situacao: string;
}

export interface NotaP {
  nota: number;
  peso: number;
}

export interface Produto {
  nome: string;
  preco: number;
}

export interface User {
  nome: string;
  idade: number;
  ocupacao: string;
  salario ?: number;
}

export interface Diretor {
  nome: string;
  idade: number;
  comissionamento: number;
  salario ?: number;
}

export type Funcionario = Diretor | User;
