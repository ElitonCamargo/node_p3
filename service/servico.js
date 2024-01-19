import  colecaoUf  from '../data/dados.js';

export const buscarUfs = () => {
  return colecaoUf;
}

export const buscarUfsPorNome = (nomeUf) => {
  return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

export const buscarUfPorId = (id) => {
  const idUF = parseInt(id);
  return colecaoUf.find(uf => uf.id === idUF);
}

const  somarDespesa = (funcionario)=> {
  return total + funcionario.salario;
}
