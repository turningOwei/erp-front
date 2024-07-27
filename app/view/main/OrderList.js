/**
 * This view is an example list of people.
 */
Ext.define('erp.view.main.OrderList', {
    dataUrl     :  SysConfig.ctx + '/account/listByPage.do',
    extend 		: 'ExtUx.grid.CusGrid',
    xtype: 'mainOrderList',

    requires: [
        'erp.store.OrderList'
    ],

    title: '订单',

    store: {
        type: 'orderList'
    },
    buildColumns:function(){
        return [
            {text: '订单项1', dataIndex: 'name'},
            {text: '订单项2', dataIndex: 'email', flex: 1},
            {text: '订单项3', dataIndex: 'phone', flex: 1}
        ];
    }
});
