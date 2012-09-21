Ext.define('MyApp.model.User', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'name', type: 'auto'},
            {name: 'email', type: 'auto'}
        ]
    }
});