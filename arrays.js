/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos de uma mente milionária",
                autor: "T. Hav Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                autor: "George S, Clason",
            },
            {
                title: "Pai rico, pai pobre",
                autor: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ], 
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                autor: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                autor: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                autor: "Augusto Cury",
            },
        ], 
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories)
for (let category of booksByCategory) {
    console.log("Total de livros da categoria: ", category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if(authors.indexOf(book.author) === -1) {
                authors.push(book.author);

            } 
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOfAuthor(author){
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if(book.author === author) {
                books.push(book.title);
            } 
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury');