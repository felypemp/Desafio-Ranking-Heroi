function calcularResultado() {
    // Obter valores de vitórias e derrotas
    const vitorias = parseInt(document.getElementById('inputVitorias').value);
    const derrotas = parseInt(document.getElementById('inputDerrotas').value);

    // Calcular saldo
    const saldoVitorias = vitorias - derrotas;

    // Determinar o nível
    let nivel;
    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias > 20 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias > 50 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias > 80 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias > 90 && vitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    // Exibir resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}.`;
}
