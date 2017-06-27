/* global $ */
var Api = function() {

};

Api.prototype = {
    constructor: Api,
    getSearchResults: function(keyword, callback) {
        var xmlhttp = new XMLHttpRequest();
        var url = "Json/sample.json";

        xmlhttp.onreadystatechange = function() {
            var json = [{
                "error": "true"
            }];
            if (this.readyState == 4 && this.status == 200) {
                json = JSON.parse(this.responseText);
                console.log(json);
                callback(json);

            }
            else {
                console.log("ERROR OCCURED");
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
}
