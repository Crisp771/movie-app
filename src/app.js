angular.module('omdbModule', [])
    .factory('omdbApi', function omdbApiFactory() {
        return {
            search : function() {
                return movieData;
            }
        }
    });
