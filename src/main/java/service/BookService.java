package service;

import model.Book;

import java.util.Collection;

/**
 * Created by Andrey on 14.01.2018.
 */
public interface BookService {

    Boolean add(Book book);

    Collection<Book> getBooks(String search);

    void delete(Book book);
}
