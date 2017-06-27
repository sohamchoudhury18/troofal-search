/* global $ */
var Events = function(Ui, api) {
    this.ui = Ui;
    this.api = api;
    this.data;
    this.counter = 0;
};

Events.prototype = {
    constructor: Events,
    keydownfn: function(e, _this) {
        setTimeout(function() {
            console.log(e.target.value);
            if (e.key == "ArrowRight" | e.key == "Tab") {
                console.log(_this.ui.suggestions);
                _this.ui.loadsugg(_this.data, _this.counter);

            }
            else if (e.key == "ArrowDown") {
                console.log(window.counter);
                if (_this.counter == 0) {
                    _this.ui.loadsugg(_this.data, _this.counter);
                    _this.counter++;
                }
                else if (_this.counter < 5) {
                    _this.ui.loadsugg(_this.data, _this.counter);
                    _this.counter++;
                }
                else if (_this.counter >= 4) {
                    _this.counter = 0;
                }
            }
            else if (e.key == "ArrowUp") {
                console.log(window.counter);
                if (_this.counter > 0) {
                    _this.counter--;
                }
                _this.ui.loadsugg(_this.data, _this.counter);
            }
            else {
                var keyword = e.target.value;
                _this.ui.removePreviousResults();
                _this.ui.display(_this.ui.loading, "block");
                _this.ui.display(_this.ui.suggestions, "none");
                _this.api.getSearchResults(keyword, function(obj) {
                        _this.ui.display(_this.ui.loading, "none");
                        _this.data = _this.ui.loadContent(obj, _this.ui);

                    }


                );
            }
        }, 0);
    },
    capture: function() {
        var _this = this;
        console.log("ddd");
        $("#search").on("keydown", function(e) {
            _this.keydownfn(e, _this);
        });

        console.log($(document));
        $(document).on("click", ".Suggestion-Div", function(e) {
            var str = e.target.innerHTML;
            $("#search").val(str);
            $("#behind-searchBox").html(str);

        });
        $(".Suggestion-Div").hover(function(e) {
            var str = e.target.innerHTML;
            $("#search").val(str);
            $("#behind-searchBox").html(str);
        }, function() {
            $("#search").val(" ");
            $("#behind-searchBox").html(" ");
        });
    }

};
