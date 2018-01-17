package model.dao;

import model.Book;

import java.util.Collection;
import java.util.List;

/**
 * Created by Andrey on 13.01.2018.
 */
public interface BookDao {

    void add(Book entity);

    void delete(Book entity);
//принимает значение из BooksLoverModel//
    Collection<Book> getBooks(String search);
//поиск дубликата по имени//
    List findByBook(String name, String author);

}
