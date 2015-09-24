require.config({
    baseUrl : "dist/js",
    paths: {
        text: "libs/text",
        underscore: "libs/underscore.min",
        menu : "app",
        menuModel: "app.model",
        menuData : "menu.data",
        menuView: "app.view"
    }
});

require([
    "menuView"
], function (MenuView) {
    
    let menu = new MenuView();
    //render the view
    menu.render();

});



