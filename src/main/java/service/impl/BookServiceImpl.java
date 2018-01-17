package service.impl;

import model.Book;
import model.dao.BookDao;
import org.springframework.transaction.annotation.Transactional;
import service.BookService;


import java.util.Collection;
import java.util.List;

/**
 * Created by Andrey on 14.01.2018.
 */
public class BookServiceImpl implements BookService {

    private BookDao bookDao;

    public BookDao getBookDao() {
        return bookDao;
    }

    public void setBookDao(BookDao bookDao) {
        this.bookDao = bookDao;
    }

    @Transactional
    public Boolean add(Book entity) {
        List<Book> duplicate = bookDao.findByBook(entity.getName(), entity.getAuthor());
        if (duplicate.isEmpty()){
            bookDao.add(entity);
            return true;
        }
        return false;
    }
    @Transactional
    public Collection<Book> getBooks(String search) {
        return bookDao.getBooks(search);
    }
    @Transactional
    public void delete(Book entity) {
        bookDao.delete(entity);
    }
}
