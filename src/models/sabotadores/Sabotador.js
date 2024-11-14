class Sabotador {
    constructor(aluno, equipe) {
        this.id = this.generateId();
        this.aluno = aluno;
        this.equipe = equipe;
    }
    generateId() {
        return Math.floor(Math.random() * 999) + 1;
    }
}
export default Sabotador;
