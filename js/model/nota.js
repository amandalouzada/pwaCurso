class Nota {
   
    constructor() {
        
        this._id =0;
        this._descricao = '';
        this._titulo = '';
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }

    get titulo(){
        return this._titulo;
    }

    set titulo(titulo){
        this._titulo = titulo;
    }

    get descricao(){
        return this._descricao;
    }

    set descricao(descricao){
        this._descricao = descricao;
    }
    
}