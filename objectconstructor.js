function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages 
    this.info = function (read) {
        if(read) {
            return `${this.title}, ${this.pages} pages, I have read it.`
        } else {
            return `${this.title}, ${this.pages} pages, no I have not read it.`
        }
    }   
}

const davidAndG = new Book('David and Goliath', 'Malcolm Gladwell', 250)
const crushIt = new Book('Crush It', 'Gary Vee', 125)
console.log(davidAndG.info(true))
console.log(crushIt.info(false))