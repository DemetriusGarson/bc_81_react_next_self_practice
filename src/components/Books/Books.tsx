import { useEffect, useState } from 'react';
import getBooks from '../../services/BooksAPI';
import type { Book } from '../../types';
import BooksList from '../BooksList/BooksList';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const booksData = await getBooks();
        setBooks(booksData);
        //   console.log(booksData);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
      <BooksList books={books} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </>
  );
}
// При монтуванні компонента Books має виконувати запит за ендпоінтом https://6971cf4a32c6bacb12c49096.mockapi.io/books.
// На підставі отриманих даних відрендерити список книг. Кожен елемент списку має містити інформацію про назву книги, автора, рік видання.

// До кожного елемента списку додати кнопку View description, при натисканні на яку має відкриватись модальне вікно з описом, яка має закриватись кпопкою Close, клавішею Esc, а також клікои по бекдропу
