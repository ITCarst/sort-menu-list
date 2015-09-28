"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(["underscore", "menuModel", "text!templates/tmpl.html"], function (_, MenuModel, tmpl) {

    var menu = new MenuModel();

    /* @class {main constructor} - the menu view class*/

    var MenuView = (function () {
        function MenuView() {
            _classCallCheck(this, MenuView);

            this.template = tmpl;
            this.data = menu.getData();
            this.el = document.getElementById("menuList");
            this.getElements();
        }

        /*
         * @data {object} - it can be sent or used default 
         * @return {tempalte} - returns rendered tempalte with data
        */

        _createClass(MenuView, [{
            key: "render",
            value: function render(data) {
                var d = data ? data : this.data;
                var myTemplate = _.template(this.template),
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
        }, {
            key: "getElements",
            value: function getElements() {
                var menuList = document.querySelector("#menuList"),
                    filters = document.querySelector("#filters"),
                    filterLinks = filters.querySelectorAll("a");
                this.addEvent(filterLinks);
            }

            /* adds event listener that does a sort based on that */
        }, {
            key: "addEvent",
            value: function addEvent(el) {
                var that = this;
                Object.keys(el).forEach(function (k) {
                    el[k].addEventListener("click", function (e) {
                        e.preventDefault();
                        var filteredData = undefined;

                        if (this.dataset.filter === "all") filteredData = that.data;else filteredData = that.switchFilter(this.dataset.filter);

                        that.render(filteredData);
                    });
                });
            }

            /*
             * @return {array} - returns a new array with data that maches to the filter
             * Switch the data based on filter
            */
        }, {
            key: "switchFilter",
            value: function switchFilter(filter) {
                return this.data.filter(function (item) {
                    if (item.type === filter) return item;
                });
            }
        }]);

        return MenuView;
    })();

    return MenuView;
});