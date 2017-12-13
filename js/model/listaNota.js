class ListaNota {

    constructor() {
        this._listaNotas = [];
    }


    // get notas() {
    // }

    adiciona(nota) {
        this._listaNotas.push(nota);
        localStorage.setItem('listaNota', JSON.stringify(this._listaNotas));
    }

    // _salvarStorage(){
      
    // }

    // getNotas() {

    // }

    // deletar(){   
    // }
}