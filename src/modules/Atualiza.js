
// atualiza.js
export function atualiza() {
    const btnAtualiza = document.querySelector('.btn-refresh');
    btnAtualiza.addEventListener('click', function(e) {
        console.log('teste');
        window.location.reload();
    });
}
