const PJ = require('../PJ');
const PF = require('../PF');
const Aluno = require('../Aluno');

function IE() {
  let dados = {
    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null,
    pf: null,
    aluno: null,
  };
  
  function setNumero(numero) {
    if (numero) {
      dados.numero = numero;
      return true;
    }
    return false;
  }
  
  function getNumero(){return dados.numero}
  
  function setEstado(estado) {
    if (estado) {
      dados.estado = estado;
      return true;
    }
    return false;
  }
  
  function getEstado(){return dados.estado}
  
  function setDataRegistro(dataRegistro) {
    if (dataRegistro) {
      dados.dataRegistro = dataRegistro;
      return true;
    }
    return false;
  }
  
  function getDataRegistro(){return dados.dataRegistro}

  function setPj(pj) {
    if (pj) {
      dados.pj = pj;
      return true;
    }
    return false;
  }

  function getPj(){return dados.pj}
  
  function setPf(pf) {
    if (pf) {
      dados.pf = pf;
      return true;
    }
    return false;
  }

  function getPf(){return dados.pf}

  function setAluno(aluno) {
    if (aluno) {
      dados.aluno = aluno;
      return true;
    }
    return false;
  }

  function getAluno(){return dados.aluno}

}
