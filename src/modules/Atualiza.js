
// atualiza.js
export default function atualiza() {
    const btnAtualiza = document.querySelector('.btn-refresh');
    btnAtualiza.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.reload();
    });
}
