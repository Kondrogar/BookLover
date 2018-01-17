/**
 * Created by Andrey on 13.01.2018.
 */
Ext.define('BookLov.view.AddWindowForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.addWindowForm',
    autoShow: true,
    layout: 'fit',
    modal: true,

    items: [
        {
            bodyPadding: 10,
            xtype: 'form',
            items: [
                {
                    // Не учитываю книги с циферным названием аля 1984(запомнить)//
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: 'Название',
                    regex: /^[А-Я-Ё][а-я-ё]{1,10}$/,
                    regexText: 'Название должно состоять из двух и более букв и начинаться с заглавной буквы',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено',
                },
                {
                    xtype: 'textfield',
                    name: 'author',
                    fieldLabel: 'Автор',
                    regex: /^[А-Я-Ё][а-я-ё]{1,10}$/,
                    regexText: 'Имя должно состоять из двух и более букв и начинаться с заглавной буквы',
                    allowBlank: false,
                    blankText:'Это поле должно быть заполнено',
                }
            ]
        }
    ],
    buttons: [
        {
            text: 'Сохранить',
            action: 'save',
            disable: true
        },
        {
            text: 'Отменить',
            handler: function () {
                this.up('window').close();
            }
        }
    ]
});