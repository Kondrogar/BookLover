package controllers;


import model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import service.BookService;

import java.util.Collection;

@Controller
@RequestMapping("/book")
public class BookController {

    @Autowired
    private BookService bookService;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Collection<Book> getBook(String search){
        return bookService.getBooks(search);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ExtResult setBook(@RequestBody Book book){
        return new ExtResult(bookService.add(book), book);
    }

    @RequestMapping(value = "id", method = RequestMethod.DELETE)
    @ResponseBody
    public String delBook(@RequestBody Book book){
        bookService.delete(book);
        return "del";
    }
}
