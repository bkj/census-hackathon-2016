(function() {
    'use strict';

    var LAT_COL = 19;
    var LON_COL = 20;

    module.exports = {
        location: function (obj) {
            return {
                lat: obj[LAT_COL],
                lon: obj[LON_COL]
            };
        }
    };

}());
