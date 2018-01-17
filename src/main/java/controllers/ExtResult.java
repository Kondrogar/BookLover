package controllers;

import model.Book;

/**
 * Created by Andrey on 14.01.2018.
 */
public class ExtResult {
    private boolean success;
    private Book data;


    public ExtResult(boolean success, Book data){
        this.success = success;
        this.data = data;
    }

    public ExtResult(){}

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public Book getData() {
        return data;
    }

    public void setData(Book data) {
        this.data = data;
    }
}
