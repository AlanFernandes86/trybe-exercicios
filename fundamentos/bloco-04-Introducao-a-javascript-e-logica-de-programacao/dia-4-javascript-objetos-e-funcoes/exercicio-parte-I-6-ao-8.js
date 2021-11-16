let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

const novoLivro = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  }

leitor.livrosFavoritos.push(novoLivro);

console.log('O livro favorito da', leitor.nome, leitor.sobrenome, 'se chama', '"'+leitor.livrosFavoritos[0].titulo+'".\n');
console.log('Julia tem', leitor.livrosFavoritos.length, 'livros favoritos.');