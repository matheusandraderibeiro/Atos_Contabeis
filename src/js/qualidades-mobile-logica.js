export function controleQualidadesCarrossel() {
    const botoes = document.querySelectorAll (".qualidade-botao");
    const radio = Array.from(document.querySelectorAll('input[name="qualidades"]'));

    if(!radio.length || botoes < 2) return;

    const antBotao = botoes[0];
    const proxBotao = botoes[1];

    function obterIndiceAtual() {
        return radio.findIndex(r => r.checked);
    }

    function estabelecerIndiceAtual(i) {
        radio[i].checked = true;
    }

    antBotao.addEventListener("click", () => {
        let indice = obterIndiceAtual();
        indice = indice <= 0 ? radio.length - 1 : indice - 1;
        estabelecerIndiceAtual(indice);
    });

    proxBotao.addEventListener("click", () => {
        let indice = obterIndiceAtual();
        indice = indice >= radio.length - 1 ? 0 : indice + 1;
        estabelecerIndiceAtual(indice);
    });
}