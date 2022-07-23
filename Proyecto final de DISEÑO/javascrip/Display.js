class Display{
    constructor(displayValorAnterior, displayValorActual){
        thid.displayValorActual=displayValorActual
        this.displayValorAnterior=displayValorAnterior
        this.calculator = new Calculadora()
        this.valorActual='';
        this.valorAnterior='';
    }
    agregarNumero(numero){
        this.valorActual=numero;
        this.imprimirValores();

    }
    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent=this.valorAnterior;
    }
}