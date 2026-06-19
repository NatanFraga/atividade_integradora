const { validarEntrada, classificarFaixaEtaria, gerarRecomendacao } = require("../app");
 
describe("Bateria de Testes Unitários do Classificador de Filmes", () => {
 
    test("Deve lançar exceção se o título estiver vazio", () => {
        expect(() => {
            validarEntrada("", 2020, 90);
        }).toThrow("Validação falhou: O título do filme não pode estar vazio.");
    });
 
    test("Deve lançar exceção se o ano for inválido", () => {
        expect(() => {
            validarEntrada("Divertida Mente", 1800, 90);
        }).toThrow("Validação falhou: O ano de lançamento deve ser entre 1900 e o ano atual.");
    });
 
    test("Deve lançar exceção se a duração for zero", () => {
        expect(() => {
            validarEntrada("Divertida Mente", 2015, 0);
        }).toThrow("Validação falhou: A duração do filme deve ser maior que zero.");
    });
 
    test("Deve retornar classificação Livre para faixa L", () => {
        expect(classificarFaixaEtaria("L")).toBe("Livre para todos os públicos");
    });
 
    test("Deve recomendar para toda a família na faixa L", () => {
        expect(gerarRecomendacao("L")).toBe("✅ Pode ser assistido por toda a família!");
    });
 
});
 