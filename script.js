window.onload = function() {
    let texto = "Aqui as palavras vão encaixar...";

    let carta = document.getElementById("texto-carta");
    let palavras = [
        "Desculpa pelo susto, não tem como abaixar o volume",
        "Finalmente chegou o dia",
        "Hoje é seu aniversario",
        "Parabéns!!!",
        "Tenho tanta coisa pra te falar",
        "mas acho que agora não é o momento",
        "Sou muito feliz por ser seu amigo",
        "Ainda mais por termos essa amizade tão longa",
        "Espero que a gente continue assim, por toda a vida",
        "Sempre vou estar aqui quando precisar",
        "Sempre vou te ajudar",
        "E sempre estarei do seu lado",
        "Não tô tãaao bem ainda",
        "Mas saiba que vc me ajudou demais",
        "Espero que aceite isso com carinho",
        "Te amo um monte, quando a gente se ver vou te abraçar bem forte",
        "Vou te dar uma pelucia quando a gente se ver!"
        
    ];

    let delay = 3300; 

    
    function adicionarPalavra(i) {
        if (i < palavras.length) {
            carta.innerText = palavras[i];
            setTimeout(function() {
                adicionarPalavra(i + 1);
            }, delay);
        } else {
            carta.innerText = texto; 
        }
    }

    adicionarPalavra(0); 
};
