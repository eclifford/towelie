var jam = {
    "packages": [
        {
            "name": "backbone",
            "location": "scripts/vendor/backbone",
            "main": "backbone.js"
        },
        {
            "name": "Backbone.Marionette",
            "location": "scripts/vendor/Backbone.Marionette",
            "main": "lib/amd/backbone.marionette.js"
        },
        {
            "name": "jquery",
            "location": "scripts/vendor/jquery",
            "main": "jquery.js"
        },
        {
            "name": "modernizr",
            "location": "scripts/vendor/modernizr"
        },
        {
            "name": "text",
            "location": "scripts/vendor/text",
            "main": "text.js"
        },
        {
            "name": "underscore",
            "location": "scripts/vendor/underscore",
            "main": "underscore.js"
        },
        {
            "name": "marionette",
            "location": "scripts/vendor",
            "main": "marionette-loader.js"
        }
    ],
    "version": "0.2.11",
    "shim": {}
};

if (typeof require !== "undefined" && require.config) {
    require.config({baseUrl: "/", packages: jam.packages, shim: jam.shim});
}
else {
    var require = {packages: jam.packages, shim: jam.shim};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}