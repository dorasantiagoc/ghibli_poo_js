function HistoriasGhibli(titulo, anoPublicacao, escritor) {
    this.titulo = titulo;
    this.anoPublicacao = anoPublicacao;
    this.escritor = escritor;
}

HistoriasGhibli.prototype.displayInfo = function() {
    console.log(`Título: ${this.titulo}, Ano de publicação: ${this.anoPublicacao}, Escritor: ${this.escritor}`);
};

function Filme(titulo, anoPublicacao, escritor, tempo) {
    HistoriasGhibli.call(this, titulo, anoPublicacao, escritor);
    this.tempo = tempo;
}

Filme.prototype = Object.create(HistoriasGhibli.prototype);
Filme.prototype.constructor = Filme;

Filme.prototype.displayInfo = function() {
    HistoriasGhibli.prototype.displayInfo.call(this);
    console.log(`Tempo: ${this.tempo}`);
};

function Livro(titulo, anoPublicacao, escritor, paginas) {
    HistoriasGhibli.call(this, titulo, anoPublicacao, escritor);
    this.paginas = paginas;
}

Livro.prototype = Object.create(HistoriasGhibli.prototype);
Livro.prototype.constructor = Livro;

Livro.prototype.displayInfo = function() {
    HistoriasGhibli.prototype.displayInfo.call(this);
    console.log(`Páginas: ${this.paginas}`);
};

const Filme1 = new Filme('A viagem de Chihiro', 2001, 'Hayao Miyazaki', '125min');
const Filme2 = new Filme('Princesa Mononoke', 1997, 'Hayao Miyazaki', '134min');
const Livro1 = new Livro('Entregas expressas da Kiki', 2021, 'Eiko Kadono', '236 páginas');

Filme1.displayInfo();
Filme2.displayInfo();
Livro1.displayInfo();