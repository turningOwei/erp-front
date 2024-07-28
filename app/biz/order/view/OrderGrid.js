/**
 * This view is an example list of people.
 */
Ext.define('erp.biz.order.view.OrderGrid', {
    dataUrl: SysConfig.ctx + '/order/listByPage',
    extend: 'ExtUx.grid.CusGrid',
    xtype: 'orderGrid',

    requires: [
        'erp.biz.order.store.OrderGridStore'
    ],

    title: '订单',

    store: {
        type: 'orderGridStore'
    },
    buildColumns: function () {
        return [
            {text: 'id', dataIndex: 'id',},
            {text: '订单号', dataIndex: 'orderNo', flex: 1},
            {text: '名称', dataIndex: 'name', flex: 1}
        ];
    }
});
