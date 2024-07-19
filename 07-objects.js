//task - 1
const Book = {
    title : 'chai aur code',
    author : 'Hitesh Chaudahary',
    year : 2022,
}

console.log(Book)

//task - 2
console.log(Book.title);
console.log(Book['author']);

//task - 3
    Book.description = ()=>{
        return `${Book.title} is written by ${Book.author} in ${Book.year}.`
    }
console.log(Book.description());
//task - 4
    const updateYear = (Year)=>{
        Book.year = Year;
    }
    updateYear(2024)
console.log(Book.year);

//task - 5

const library = { 
    name : 'code library',
    books : [
        {
            title : 'chai aur code',
            author : 'Hitesh Chaudahary',
            year : 2022,
        },
        {
            title : 'Hitesh Chaudhary',
            author : 'Hitesh Chaudahary',
            year : 2024,
        },
        {
            title : 'New Gen Code',
            author : 'Aditya',
            year : 2024,
        },
        {
            title : 'DSA in 100 days',
            author : 'coder',
            year : 2026,
        }
    ]
}
console.log(library)

//task - 6
console.log(library.name)
console.log(library.books[0].title);

//task - 7
 Book.calldesc = function(){
    return `${this.title} book is wriiten in year ${this.year}.`
 }
 console.log(Book.calldesc());

 //task - 8
  for (const key in Book) {
    if (Object.hasOwnProperty.call(Book, key)) {
        const element = Book[key];
        console.log(key),
        console.log(element)
    
    }
  }

    //task - 9
    for (const key in Book) {
        if (Object.hasOwnProperty.call(Book, key)) {
            const element = Book[key];
            console.log(key),
            console.log(element)
        
        }
      }