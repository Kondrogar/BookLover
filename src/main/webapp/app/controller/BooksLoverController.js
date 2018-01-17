/**
 * Created by Andrey on 13.01.2018.
 */

Ext.define('BookLov.controller.BooksLoverController', {
    extend: 'Ext.app.Controller',

    views: [
        'AddWindowForm',
        'BooksGrid',
        'BooksLover',
        'SearchBooks'

    ],

    stores: ['BooksLoverStore'],
    models: ['BooksLoverModel'],


    refs:[
        {selector:'booksGrid',
            ref:'booksGrid'},
        {selector:'booksGrid button[action="add"]',
            ref:'booksGridAdd'},
        {selector:'bookGrid button[action]="delete"',
            ref:'bookGridDelete'},
        {selector:'searchBooks button[action]="search"',
            ref:'searchBooks'},
        {selector:'addWindowForm',
            ref:'addWindowForm'},
        {selector:'booksLover',
            ref:'booksLover'},
        {selector:'addWindowForm textfield[name=name]',
            ref:'addWindowFormName'},
        {selector:'addWindowForm textfield[name=author]',
            ref:'addWindowFormAuthor'},
        {selector:'addWindowForm button[action=save]',
            ref:'addWindowFormBookSave'}
    ],

    init: function () {
        this.control({
            'booksGrid button[action=add]':{
                click: this.onAddBook
            },
            'booksGrid button[action=delete]':{
                click: this.onDelBook
            },
            'searchBooks textfield[name="search"]':{
                change: this.onChangeText
            },
            'booksGrid':{
                cellclick: this.onLineGrid
            },
            'addWindowForm button[action=save]': {
                click: this.onSaveBook
            },
            'addWindowForm textfield[name=name]': {
                change: this.onValidation
            },
            'addWindowForm textfield[name=author]': {
                change: this.onValidation
            }

        });
    },
    onSaveBook:function (button) {
        var me = this;
        var bookModel = Ext.create('BookLov.model.BooksLoverModel');
        bookModel.set(this.getAddWindowForm().down('form').getValues());
        bookModel.save({
            success: function (operation, response) {
                var objAjax = operation.data;
                me.getBooksLoverStoreStore().add(objAjax);
                me.getAddWindowForm().close();
            },
            failure: function (dummy, result) {
                Ext.MessageBox.show({
                    title: 'Дубликат!',
                    msg: 'Такое название и автор уже существуют',
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            }

        });

    },

    onAddBook: function () {
        Ext.widget('addWindowForm');
    },

    onDelBook: function () {
        var sm = this.getBooksGrid().getSelectionModel();
        var rs = sm.getSelection();
        this.getBooksGrid().store.remove(rs[0]);
        this.getBooksGrid().store.commitChanges();
        this.getBooksGridDelete().disable();
    },

    onChangeText: function () {
        this.getBooksLoverStoreStore().load({
            params:{
                search: this.getBooksLover().down('searchBooks').getValues()
            }
        });

    },

    onLineGrid: function () {
        this.getBooksGridDelete().enable();
    },

    onValidation: function () {
        if (this.getAddWindowFormName().validate() && this.getAddWindowFormAuthor().validate()){
            this.getAddWindowFormBookSave().enable();
        }else {
            this.getAddWindowFormBookSave().disable();
        }
    }


});
