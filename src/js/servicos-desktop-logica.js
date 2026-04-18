export function mostraServicos () {
    const ACTIVECLASS = "ativo";
    const servicos = document.querySelectorAll(".card-item");

    function removeClass() {
        const item = document.querySelector(`.${ACTIVECLASS}`);
        if(item) {
            item.classList.remove(ACTIVECLASS);
        }
    }

    function adicionaClass($event) {
        $event.stopPropagation();
        removeClass();

        const target = $event.currentTarget;
        target.classList.add(ACTIVECLASS);
    }

    servicos.forEach(servico => {
        servico.addEventListener("click", adicionaClass);
    })
}




