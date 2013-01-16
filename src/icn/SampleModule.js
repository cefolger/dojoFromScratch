define([
    'dijit/registry',
    'dojo/_base/declare'
], function( registry, declare ) {
    return declare([], {
        constructor: function( args ) {
            this.inherited(arguments);
        },

        // test comment
        start: function( ) {
            alert('in SampleModule.js');
        }
    });
});
