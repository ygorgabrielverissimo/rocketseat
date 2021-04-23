const booksByCtegory = [
    { 
        category: "Riqueza",
        books:[
            {   
                title: "Os segredos da mente milionária",
                author:"T. Harv Eker",
            },
            {   
                title: "O Homem mais rico da Babilônia",
                author:"George S. clason",
            },
            {   
                title: "Pai rido pai pobre",
                author:"Robert T. kiyosaki e sharon L. Lechter",
            },
   
        ],
        
    },
    {
        category: "Inteligência emocional",
        books:[
            {   
                title: "Você é Insubistituível",
                author:"August Cury",
            },
            {   
                title: "Ansiedade como enfrentar o mal do século",
                author:"August Cury",
            },
            {   
                title: "Os 7 habilitos das pessoas altamente eficazes",
                author:"Stephem R. covey",
            },
   
        ],
        
    }
]
const totalCategory = booksByCtegory.length
console.log(totalCategory)

for(let category of booksByCtegory){
    console.log(`Total de livros da categoria:`, category.category)
    console.log(category.books.length)
}

function countAuthor() {
    let authors = [];
    for(let category of booksByCtegory){
        for(let book of category.books)
        if(authors.indexOf(book.author) == -1){
            authors.push(book.author)
        }
    }
    console.log("Total de autores: ",authors.length)
}
countAuthor();

function booksOfAuthor(author) {
    let books = [];

   for(let category of booksByCtegory){
      for(let book of category.books){
          if(book.author === author){
              books.push(book.title)
                } 
            }            
        }
        console.log(`Autor: ${author} Livros: ${books.join(", ")}`)
}

booksOfAuthor("August Cury");