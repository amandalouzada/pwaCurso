$(document).ready(function () {
    var listaNota = new ListaNota();
    var nota = new Nota(1,'Primeira de todas', 'NOTA1');
    listaNota.adiciona(nota);
})


















// var dialog = document.querySelector('dialog');
// var form = document.querySelector('form');
// var notasTemplate = document.querySelector('#listNotaTemplate');
// var listaNota = new ListaNota();
// var notasView = new NotasView(notasTemplate);



// var showModalButton = document.querySelector('#addModal');

// if (!dialog.showModal) {
//     dialogPolyfill.registerDialog(dialog);
// }

// showModalButton.addEventListener('click', function () {
//     dialog.showModal();
// });

// dialog.querySelector('.close').addEventListener('click', function () {
//     dialog.close();
// });

// dialog.querySelector('.salvar').addEventListener('click', function () {
//     var nota = new Nota();
//     nota.descricao = $('#formNota').val().replace(/\n/g, '</br>');
//     nota.titulo = $('#formTitulo').val().replace(/\n/g, '</br>');
//     limpaInputs();
//     listaNota.adiciona(nota);
//     notasView.update(listaNota);
//     dialog.close();
// });



// $('.deletar_nota').on('click', function () {
//     deletar(this.id);
// })


// deletar = (e) => {
//     console.log(e.id);
//     listaNota.deletar(e.id);
//     atualizarView();
// }

// atualizarView = () => {
//     listaNota.getNotas();
//     notasView.update(listaNota);
// }

// limpaInputs = () => {
//     $('#formNota').val('');
//     $('#formTitulo').val('');
// }