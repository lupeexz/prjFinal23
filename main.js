function abrirModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function fecharModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}
document.getElementById('openModalBtn').addEventListener('click', abrirModal);
