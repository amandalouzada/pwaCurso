class ListaNota {

    constructor() {
        this._listaNotas = [];
    }


    get notas() {
        return [].concat(this._listaNotas);
    }

    atualizaListaNotas(){
        var lista = JSON.parse(localStorage.getItem('listaNota'));
        if(lista) {
            this._listaNotas =[];            
            lista.map( nota =>{
                var novaNota = new Nota();                            
                novaNota.id = nota._id;
                novaNota.titulo = nota._titulo;
                novaNota.descricao = nota._descricao;
                this._listaNotas.push(novaNota);
            });  
            console.log(this._listaNotas); 
        }
    }

    adiciona(nota) {
        console.log(this._listaNotas); 
        
        var idLocal = parseInt(localStorage.getItem('id'));
        nota.id = idLocal ? idLocal : 0;
        localStorage.setItem('id', nota.id+1);
        this._listaNotas.push(nota);
        localStorage.setItem('listaNota', JSON.stringify(this._listaNotas));
        console.log(this._listaNotas); 
        
    }

    // _salvarStorage(){
      
    // }

    // getNotas() {

    // }

    deletar(id){   
        this._listaNotas = this._listaNotas.filter(nota => nota.id != id);
        localStorage.setItem('listaNota',JSON.stringify(this._listaNotas));
    }


}