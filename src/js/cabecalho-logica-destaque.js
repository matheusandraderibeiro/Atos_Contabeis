export function controleDestaqueSlides() {
    const botoes = document.querySelectorAll(".botao_destaque");
    const radio = Array.from(document.querySelectorAll('input[name="slider"]'));

    if(!radio.length || botoes < 2) return;

    let autoplayInterval;
    const antBotao = botoes[0];
    const proxBotao = botoes[1];
    const AUTOPLAY_DELAY = 5000;

    function obterIndiceAtual() {
        return radio.findIndex(r => r.checked);
    }

    function estabelecerIndice(i) {
        radio[i].checked = true;
    }

    function nextSlide() {
        let indice = obterIndiceAtual();
        indice = indice >= radio.length -1 ? 0 : indice + 1;
        estabelecerIndice(indice);
    }
    function stopautoplay() {
        clearInterval(autoplayInterval);
    }

    function startAutoplay() {
        stopautoplay();
        autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
    }

    function restartAutoplay() {
        stopautoplay();
        startAutoplay();
    }

    antBotao.addEventListener("click", () => {
        let indice = obterIndiceAtual();
        indice = indice <= 0 ? radio.length - 1 : indice - 1;
        estabelecerIndice(indice);
        restartAutoplay();
    });

    proxBotao.addEventListener("click", () => {
        nextSlide();
        restartAutoplay();
    });

    startAutoplay();
}