class NotasView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return `
        ${model.notas.map(n => `
            <div class="demo-card-wide mdl-card mdl-shadow--2dp mdl-cell--12-col">
                <div class="mdl-card__title">
                    <h2 class="mdl-card__title-text">${n.titulo}</h2>
                </div>
                <div class="mdl-card__supporting-text">
                    ${n.descricao}
                </div>
                <div class="mdl-card__actions mdl-card--border">
                    <a id="${n.id}" onclick="deletar(this)" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect deletar_nota">
                        <i class="material-icons">delete</i>
                    </a>
                </div>
            </div>
            `).join('')}                
        `;
    }
}