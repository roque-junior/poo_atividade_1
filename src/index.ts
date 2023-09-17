//Exercicio 1
import { MediaFinal } from './types';

function media(a:number, b:number) : MediaFinal 
{
    let media = (a+b)/2;
    let situacao = (media >= 6) ? "Aprovado" : "Reprovado";

    return {media, situacao};
}

console.log('Exercicio 1:', media(7,4));

//Exercicio 2
import { NotaP } from './types';

function mediaPonderada(a:NotaP, b:NotaP) : number
{
    return (a.nota*a.peso + b.nota*b.peso)/(a.peso + b.peso);
}

console.log('Exercicio 2:', mediaPonderada({nota:7, peso:2}, {nota:5, peso:3}));

//Exercicio 3
let carteira = {
  saldo: 0,
  entradas: [] as number[],
  saidas: [] as number[],
};

function movimentaCarteira(entrada: number, saida: number) : void
{
  carteira.entradas.push(entrada);
  carteira.saldo += entrada;

  if (carteira.saldo < saida)
  {
    console.error(`Saldo insuficiente para retirar R$ ${saida.toFixed(2)}`);
  }
  else
  {
    carteira.saidas.push(saida);
    carteira.saldo -= saida;
  }
}

movimentaCarteira(50, 10);
console.log('Exercicio 3:', carteira);
movimentaCarteira(0, 100);

//Exercicio 4
import { Produto } from './types';

let produtos : Produto[] = [];

function cadastrarProduto(produto: Produto) : void {
  produtos.push(produto);
}

function excluirProduto(nome: string) : void {
  let index = produtos.findIndex(produto => produto.nome === nome);
  if (index >= 0)
    produtos.splice(index, 1);
}

function listarProdutos() : void {
  produtos.forEach(produto => {
    console.log('Exercicio 4:', produto.nome, 'R$', produto.preco);
  });
}

cadastrarProduto({nome: 'Notebook', preco: 5000});
cadastrarProduto({nome: 'Mesa', preco: 777});
listarProdutos();
excluirProduto('Mesa');
console.log('Exercicio 4: Mesa excluida');
listarProdutos();

//Exercicio 5
import { User } from './types';

function imprimeUser(user: User) : void {
  let salario = user.salario ? user.salario.toFixed(2) : "N/A";
  console.log('Exercicio 5:', `${user.nome}, ${user.idade} anos, ${user.ocupacao}, salário R$ ${salario}`);
}

imprimeUser({nome: 'Roque', idade: 30, ocupacao: 'Desenvolvedor', salario: 50000});
imprimeUser({nome: 'Sérgio', idade: 44, ocupacao: 'Desenvolvedor'});

//Exercicio 6
import { Diretor } from './types';

function imprimeDiretor(d: Diretor) : void {
  let salario = d.salario ? d.salario.toFixed(2) : "N/A";
  console.log('Exercicio 6:', `Diretor(a) ${d.nome}, ${d.idade} anos, comissão nível ${d.comissionamento}, salário R$ ${salario}`);
}

imprimeDiretor({nome: 'João', idade: 30, comissionamento: 5, salario: 50000});

//Exercicio 7
import { Funcionario  } from './types';

function imprimeFuncionario(f: Funcionario) : void {
  if ("comissionamento" in f)
    imprimeDiretor(f);
  else
    imprimeUser(f);
}

console.log('Exercicio 7: --');
imprimeFuncionario({nome: 'João', idade: 30, ocupacao: 'Desenvolvedor', salario: 5000});
imprimeFuncionario({nome: 'Dr. João', idade: 60, comissionamento: 5, salario: 50000});
