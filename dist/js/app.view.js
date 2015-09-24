"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(["underscore", "menuModel", "text!templates/tmpl.html"], function (_, MenuModel, tmpl) {

    var menu = new MenuModel();

    var MenuView = (function () {
        function MenuView() {
            _classCallCheck(this, MenuView);

            this.template = tmpl;
            this.data = menu.getData();
            this.el = document.getElementById("menuList");
        }

        _createClass(MenuView, [{
            key: "render",
            value: function render() {
                var myTemplate = _.template(this.template),
                    that = this;

                return _.each(this.data, function (item) {
                    that.el.innerHTML += myTemplate(item);
                });
            }
        }]);

        return MenuView;
    })();

    return MenuView;
});