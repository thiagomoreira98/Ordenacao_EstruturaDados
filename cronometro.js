
Date.prototype.converter = function () {
  return (this.getMinutes()*60*1000)+( this.getSeconds() * 1000 ) + this.getMilliseconds();
};

function Cronometro(nome) {
  this.nome = nome;
  this.inicio=0;
  this.fim=0;

  this.inicio = function() {
    this.inicio = performance.now();
  }

  this.fim = function() {
    this.fim = performance.now();
  }

  this.total = function() {
    return this.fim()-this.inicio();
  }

  this.resumo=function() {
    this.fim();
    console.log("\n------------- " + nome + " -------------");
    console.log('\nInicio:\t'+ this.inicio + '\n' );
    console.log('Fim:\t'   + this.fim  + '\n'    );

    console.log( "\t" + this.fim +" ms - "+ this.inicio + " ms\n");
    console.log('Total:\t' + this.total() +" ms\n");
    console.log("-------------  -------------\n");
  }
}