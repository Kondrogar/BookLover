/**
 * Created by Andrey on 13.01.2018.
 */

Ext.define('BookLov.view.SearchBooks' ,{
    extend : 'Ext.form.Panel',
    alias : 'widget.searchBooks',
    bodyPadding : 10,
    items : [
        {
            xtype : 'textfield',
            name : 'search',
            fieldLabel : 'Введите название',
            maxLength : 200
        }
    ]
});
