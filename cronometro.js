
Date.prototype.converter = function () {
  return (this.getMinutes()*60*1000)+( this.getSeconds() * 1000 ) + this.getMilliseconds();
};

function Cronometro(nome) {
  this.nome = nome;
  this.inicio=0;
  this.fim=0;

  this.inicio = function() {
    this.inicio = new Date();
  }

  this.fim = function() {
    this.fim = new Date();
  }

  this.total = function() {
    return this.fim.converter()-this.inicio.converter();
  }

  this.resumo=function() {
    this.fim();
    console.log("\n------------- " + nome + " -------------");
    console.log('\nInicio:\t'+ this.inicio + '\n' );
    console.log('Fim:\t'   + this.fim  + '\n'    );

    console.log( "\t" + this.fim.converter() +" ms - "+ this.inicio.converter() + " ms\n");
    console.log('Total:\t' + this.total() +" ms\n");
    console.log("-------------  -------------\n");
  }
}