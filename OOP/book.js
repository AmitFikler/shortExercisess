class BookList {
    constructor(_read, _notRead, _next, _currect, _last, _booklist){
        this.read = _read
        this.notRead = _notRead
        this.next = _next
        this.currect = _currect
        this.last = _last
        this.booklist = _booklist
    }
    add(book){
        if(!this.booklist.includes(book)){
            this.booklist.push(book)
            if (book.read){
                this.read++
            }else{
                this.notRead++
            }
        } else {
            console.log("you already read this book")
        }
    }
    finishCurrentBook(){
        console.log(`you finished ${this.currect.title}`);
        this.currect.read = true
        this.currect.readDate = new Date(Date.now())
        this.last = this.currect
        this.currect = this.next 
        this.read++
        this.notRead--
        for (let book of this.booklist){
            if(!book.read){
                this.next = book
            }
        }
    }

}

class Book {
    constructor(_title,_genre,_author,_read, _readDate){
        this.title = _title
        this.genre = _genre
        this.author = _author
        this.read = _read
        this.readDate = _readDate 
    }
}


let newBook =  new Book("Harry Potter and the Goblet of Fire","Fantasy", "JK Rowling", true, undefined)
let n1 = new Book("Darkmans", "Classics", "Nicola Barker", true, undefined)
let n2 = new Book("Bad Blood", "Classics", "Lorna Sage", false, undefined)
let n5 = new Book("Priestdaddy", "added", "Patricia Lockwood", true, undefined)
let n6 = new Book("The Omnivore’s Dilemma", "Literary Fiction", "Michael Pollan", false, undefined)
let n8 = new Book("The Noonday Demon", "Historical Fiction", "Andrew Solomon", false, undefined)

const arr = [newBook,n1,n2,n5,n6]
const libary = new BookList(2,3,n1,n2,undefined,arr)

console.log(libary)
libary.finishCurrentBook()
libary.add(n8)