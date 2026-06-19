function validarEntrada(titulo, ano, duracao) {
    if (!titulo || titulo.trim() === "") {
        throw new Error("Validação falhou: O título do filme não pode estar vazio.");
    }
    if (!ano || ano < 1900 || ano > new Date().getFullYear()) {
        throw new Error("Validação falhou: O ano de lançamento deve ser entre 1900 e o ano atual.");
    }  
    if (!duracao || duracao <= 0) {
        throw new Error("Validação falhou: A duração do filme deve ser maior que zero.");
    }
}

function classificarFaixaEtaria(faixa) {
    if (faixa ==="L") {
        return "Livre para todos os públicos";
    } else if (faixa === "10") {
        return "Não recomendado para menores de 10 anos";
    } else if (faixa === "12") {
        return "Não recomendado para menores de 12 anos";
    } else if (faixa === "14") {
        return "Não recomendado para menores de 14 anos";
    } else if (faixa === "16") {
        return "Não recomendado para menores de 16 anos";
    } else if (faixa === "18") {
        return "Não recomendado para menores de 18 anos";
    } else {
        return "Classificação de faixa etária inválida.";
    }
}

function gerarRecomendacao(faixa) {
    if (faixa === "L") {
        return "✅ Pode ser assistido por toda a família!";
    } else if (faixa === "10") {
        return "👦 Indicado para crianças acima de 10 anos com supervisão.";
    } else if (faixa === "12") {
        return "🧒 Indicado para jovens acima de 12 anos.";
    } else if (faixa === "14") {
        return "🧑 Indicado para adolescentes acima de 14 anos.";
    } else if (faixa === "16") {
        return "🔴 Conteúdo adulto, apenas para maiores de 16 anos.";
    } else if (faixa === "18") {
        return "🔞 Conteúdo restrito, apenas para maiores de 18 anos.";
    } else {
        return "Sem recomendação disponível.";
    }
}

function processarFilme() {
    var titulo  = document.getElementById("txtTitulo").value;
    var ano     = parseInt(document.getElementById("txtAno").value);
    var duracao = parseInt(document.getElementById("txtDuracao").value);
    var faixa   = document.getElementById("selFaixa").value;
 
    var resultado = document.getElementById("txtResultado");
 
    try {
        validarEntrada(titulo, ano, duracao);
 
        var classificacao  = classificarFaixaEtaria(faixa);
        var recomendacao   = gerarRecomendacao(faixa);
 
        resultado.style.color = "#1A1A24";
        resultado.innerHTML =
            "<strong>" + titulo + " (" + ano + ")</strong><br>" +
            "⏱️ Duração: " + duracao + " minutos<br>" +
            "🎬 Classificação: " + faixa + " — " + classificacao + "<br>" +
            recomendacao;
 
    } catch (error) {
        resultado.style.color = "#CC0000";
        resultado.innerText = error.message;
    }
}
 
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = { validarEntrada, classificarFaixaEtaria, gerarRecomendacao };
}