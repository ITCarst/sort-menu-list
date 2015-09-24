define([
   "menu",
   "menuData" 
], function (Menu, data) {

    //extends Menu Model 
    class MenuModel extends Menu {
        getData () {
            return data;
        } 
    }

    return MenuModel;
});
