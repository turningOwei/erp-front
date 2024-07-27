/**
 * This view is an example list of people.
 */
Ext.define('erp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'erp.store.Personnel'
    ],

    title: '首页',

    store: {
        type: 'personnel'
    },
    indexBar: true,
    columns: [
        {text: '名字', dataIndex: 'name'},
        {text: '邮件', dataIndex: 'email', flex: 1},
        {text: '电话', dataIndex: 'phone', flex: 1}
    ],

    listeners: {
        select: 'testMsg'
    }
});
