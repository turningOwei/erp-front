Ext.define('erp.store.OrderList', {
    extend: 'Ext.data.Store',

    alias: 'store.orderList',

    fields: [
        'name', 'email', 'phone'
    ],

    data: { items: [
        { name: '订单项1', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { name: '订单项2',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
