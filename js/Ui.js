/* global $ */
var Ui = function() {
    this.searchBox = $("#search");
    this.suggestions = $("#suggestions");
    this.loading = $("#loading-div-id");
    this.behind = $("#behind-searchBox");
};

Ui.prototype = {
    constructor: Ui,
    display: function(ele, property) {
        ele.css("display", property);
    },
    loadContent: function(json) {
        this.data = json.data;
        console.log(this.data[0].name);
        this.data.forEach(function(value, index) {
            var suggestionsdiv = $("#suggestions");
            var div = document.createElement("div");
            div.className = "sugg";
            div.id = "sugg" + (index);
            div.innerHTML = value.name;
            suggestionsdiv.append(div);

        });
        var copy = $("#behind-searchBox");
        var suggestions = $("#suggestions");
        if ($("#search").val() == "") {
            suggestions.css("display", "none");
            copy.html(" ");
            window.counter = 0;


        }
        else {
            suggestions.css("display", "block");
            var str = this.data[0].name;
            copy.text(str);

        }
        return this.data;

    },
    removePreviousResults: function() {
        this.suggestions.html(" ");
    },
    loadsugg: function(data, counter) {
        console.log(counter);
        var copy = $("#search");
        var behind = $("#behind-searchBox");
        var sugg = $("#sugg" + counter);
        copy.val(data[counter].name);
        var str = data[counter].name;
        behind.html(str);
        sugg.css("backgroundColor", "#e6eaf2");

    }
};
