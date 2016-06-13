(function() {

    angular
        .module('speedly')
        .directive('results', results)

    function results() {

        var directive = {
            restrict: 'EA',
            templateUrl: 'results/results.template.html',
            scope: {
                result: '='
            }
        };

        return directive;
    }

})();