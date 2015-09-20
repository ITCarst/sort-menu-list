"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(["menuData"], function (data) {

    var Menu = (function () {
        function Menu() {
            _classCallCheck(this, Menu);
        }
        //console.log(arguments);

        //get the elements from the DOM that will handle the events

        _createClass(Menu, [{
            key: "getEls",
            value: function getEls() {}

            //eventListener for the buttons to trigger the switch
        }, {
            key: "triggerSwitch",
            value: function triggerSwitch() {}
        }]);

        return Menu;
    })();

    return Menu;
});