/**
 * Created by Andrey on 13.01.2018.
 */

Ext.define('BookLov.model.BooksLoverModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'author'],
    proxy: {
        pageParam: 'search',
        type: 'rest',
        api: {
            create: "book",
            read: 'book',
            destroy: 'book'
        },
        reader: {
            type: 'json',
            root : 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields:true
        }
    }
});