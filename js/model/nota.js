class Nota {
   
    constructor(id, titulo, descricao) {
        this._id = id ? id : 0;
        this._descricao = descricao ? descricao : '';
        this._titulo = titulo ? titulo : '';
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