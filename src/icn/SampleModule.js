define([
    'dojo/main',
    'dojo/selector/acme',
    'dijit/registry',
    'dojo/_base/declare',
    'dijit/form/Button',
    'dojo/dom-construct',
    'dojo/ready'
], function( main, acme, registry, declare, Button, domConstruct, ready ) {
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
