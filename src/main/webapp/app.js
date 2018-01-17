/**
 * Created by Andrey on 13.01.2018.
 */

Ext.application({
    name : 'BookLov',

    appFolder : 'app',

    controllers:[
      'BooksLoverController'
    ],
    launch : function () {
        Ext.create('Ext.container.Viewport' , {
            layout : 'fit',
            items : {
                xtype : 'booksLover',
                html : '<h2> Книголюб3000</h2>'
            }
        });
    }
});