(function() {
    const funcionario = {
        _nome: '',
        _idade: 0,
        _id: 0,
        _salario: 0,
        get nome() {
            return this._nome;
        },
        set nome(novoNome = '') {
            this._nome = novoNome !== ' ' && novoNome.indexOf(' ') > 0 ? novoNome : 'Inválido';
        },
        get idade() {
            return this._idade;
        },
        set idade(novaIdade = 0) {
            this._idade = novaIdade >= 0 && novaIdade <= 100 ? novaIdade : 0;
        },
        get id() {
            return this._id;
        },
        set id(novoId = ' ') {
            this._id = novoId !== ' ' ? novoId : 'Inválido';
        },
        get salario() {
            return this._salario;
        },
        set salario(salarioAtual = 0) {
            if (salarioAtual < 1.500) {
                this._salario = salarioAtual;
            } else if (salarioAtual >= 1.500 && salarioAtual < 1.750) {
                this._salario = salarioAtual + (salarioAtual * (12 / 100));
            } else if (salarioAtual >= 1.750 && salarioAtual < 2.000) {
                this._salario = salarioAtual + (salarioAtual * (10 / 100));
            } else if (salarioAtual >= 2.000 && salarioAtual < 3.000) {
                this._salario = salarioAtual + (salarioAtual * (7 / 100));
            } else {
                this._salario = salarioAtual + (salarioAtual * (5 / 100));
            }
        }
    }

    funcionario.nome = 'Guilherme Zalla';
    funcionario.idade = 22;
    funcionario.id = 209771;
    funcionario.salario = 1.600;

    console.log(funcionario.nome, funcionario.idade, funcionario.id, funcionario.salario);
})()