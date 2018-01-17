/**
 * Created by Andrey on 13.01.2018.
 */

Ext.define('BookLov.view.BooksLover', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.booksLover',
    width: 500,
    height: 360,
    padding: 10,
    layout: 'border',
    items: [
        {
            xtype: 'booksGrid',
            region: 'center'
        },
        {
            xtype:'panel',
            html: '<div style="font: normal 18px cursive"><center><font size = "10">Книголюб3000</font></center></div>',
            region: 'north',
            height: 80
        },
        {
            xtype: 'searchBooks',
            title: 'Поиск',
            region: 'west',
            width: 300,
            collapsible: true,
            collapsed: false
        }
    ],
    renderTo: Ext.getBody()
});