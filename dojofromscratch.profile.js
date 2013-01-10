var profile = (function(){
    return {
        basePath: "./src",
        releaseDir: "../dist",
        releaseName: "releasename",
        action: "release",
 
        packages:[{
            name: "dojo",
            location: "dojo"
        },{
            name: "dijit",
            location: "dijit"
        },{
            name: "dojox",
            location: "dojox"
        },{
            name: "icn",
            location: "icn"
        }],
 
        layers: {
            "dojo/dojo": {
                include: [ "dojo/dojo", "dojo/i18n", "dojo/domReady",
                    "app/main", "app/run" ],
                customBase: true,
                boot: true
            }
        }
    };
})();

