abstract class BooksRepository {
    abstract createBook(book: Book): void;      //  создание книги
    abstract getBook(id: string): Book;         //  получение книги по id
    abstract getBooks(): Book[];                //  получение всех книг
    abstract updateBook(id: string): Book;      //  обновление книги
    abstract deleteBook(id: string): void;      //  удаление книги
}
