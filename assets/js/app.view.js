define([
    "underscore",
    "menuModel",
    "text!templates/tmpl.html"
], function (_, MenuModel, tmpl) {
   
    let menu = new MenuModel();

    /* @class {main constructor} - the menu view class*/
    class MenuView {
        constructor () {
            this.template = tmpl;
            this.data = menu.getData();
            this.el = document.getElementById("menuList");
            this.getElements();
        }
        /*
         * @data {object} - it can be sent or used default 
         * @return {tempalte} - returns rendered tempalte with data
        */
        render (data) {
            let d = (data) ? data : this.data;
            let myTemplate = _.template(this.template),
                that = this;
            //empty the content before 
            this.el.innerHTML = '';
            return _.each(d, function (item) {
                that.el.innerHTML += myTemplate(item); 
            });
        }

        /*
         * gets the elements that preforms an action on the DOM 
         * adds event to the links to filter based on data
        */
        getElements () {
            let menuList = document.querySelector("#menuList"),
                filters = document.querySelector("#filters"),
                filterLinks = filters.querySelectorAll("a");
            this.addEvent(filterLinks);
        }

        /* adds event listener that does a sort based on that */
        addEvent (el) {
            var that = this;
            Object.keys(el).forEach(k => {
                el[k].addEventListener("click", function (e) {
                    e.preventDefault();
                    let filteredData;

                    if (this.dataset.filter === "all")
                        filteredData = that.data;
                    else 
                        filteredData =  that.switchFilter(this.dataset.filter);

                    that.render(filteredData);
                });
            });   
        }

        /*
         * @return {array} - returns a new array with data that maches to the filter
         * Switch the data based on filter
        */
        switchFilter (filter) {
            return this.data.filter(function (item) {
                if (item.type === filter)
                    return item;
            });
        }
    }

    return MenuView;

});
