package model.dao.impl;


import model.Book;
import model.dao.BookDao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collection;
import java.util.List;

public class BookDaoImpl implements BookDao {

    @PersistenceContext
    private EntityManager emf;


    public void add(Book book) {
        emf.persist(book);
    }

    public void delete(Book book) {
        emf.remove(emf.getReference(Book.class, book.getId()));
    }

    public Collection<Book> getBooks(String search) {
        //noinspection Since15
        if (search == null || search.trim().isEmpty()){
            return emf.createQuery("select c from Book c").getResultList();
        }
        return emf.createQuery("select c from Book c where c.name like :search")
                .setParameter("search", search.trim()+ "%")
                .getResultList();
    }

    public List findByBook(String name, String auther) {
        return emf.createQuery("select c from Book c where where c.name = :name and c.author = :author")
                .setParameter("name", name)
                .setParameter("author", auther)
                .getResultList();
    }
}
