/**
 * Created by Andrey on 13.01.2018.
 */
/*book имя на замапен java-класс(GET POST DELETE)*/
Ext.define('BookLov.store.BooksLoverStore', {
   extend: 'Ext.data.Store',
    model: 'BookLov.model.BooksLoverModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
       type: 'rest',
        api: {
           create: 'book',
            read: 'book',
            destroy : 'book'
        },
        reader: {
           type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
           type: 'json',
            writeAllFields: true
        }
    }
});