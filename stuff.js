function Book(tltle, author, pageNum) {
    this.title = tltle;
    this.author = author;
    this.pageNum = pageNum;
    this.hasRead = false;
    this.Info = function() {
        return this.title + " by: " + this.author + ", " + this.pageNum + ", " + ((this.hasRead) ? "already read" : "not read yet");
    }
}

let a = new Book("bookName", "book author", 400);