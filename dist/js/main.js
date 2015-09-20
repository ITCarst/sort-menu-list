"use strict";

require.config({
    "baseUrl": "dist/js",
    paths: {
        menuData: "menu.data",
        text: "libs/text"
    }
});

require(["app"], function (App) {
    var app = new App();
});