Ext.define('mybd.model.Trace', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'trace'],
        proxy: {
            type: 'localstorage',
            id  : 'trace'
        }
    }
});