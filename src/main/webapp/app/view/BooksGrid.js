/**
 * Created by Andrey on 13.01.2018.
 */

Ext.define('BookLov.view.BooksGrid', {
   extend : 'Ext.grid.Panel',
    alias : 'widget.booksGrid',
    width : 400,
    height: 300,
    frame : true,
    store: 'BooksLoverStore',
    iconCls: 'icon-user',
    columns: [
        {
            text: 'Название',
            flex: 1,
            sortable: true,
            dataIndex: 'name'
        },
        {
            text: 'Автор',
            flex:2,
            sortable: true,
            dataIndex: 'author'
        }
    ],
    dockedItems: [
        {
            xtype:'toolbar',
            items: [
                {
                    text:'Добавить',
                    action:'add',
                    iconCls:'icon-add'
                },
                '-',
                {
                    text: 'Удалить',
                    action:'delete',
                    iconCls:'icon-delete',
                    disabled:true
                }
            ]
        }
    ]
});