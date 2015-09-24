define([
    "underscore",
    "menuModel",
    "text!templates/tmpl.html"
], function (_, MenuModel, tmpl) {
   
    let menu = new MenuModel();

    class MenuView {
        constructor () {
            this.template = tmpl;
            this.data = menu.getData();
            this.el = document.getElementById("menuList");
        }
        render () {
            let myTemplate = _.template(this.template),
                that = this;
            
            return _.each(this.data, function (item) {
                that.el.innerHTML += myTemplate(item); 
            });
        }
    }

    return MenuView;

});
