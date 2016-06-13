(function () {
    angular
        .module('speedly')
        .directive('settings', settings);

    function settings() {

        var directive = {
            link: link,
            templateUrl: 'settings/settings.template.html',
            restrict: 'EA',
            require: 'speedly'
        };

        return directive;

        function link(scope, element, attrs, speedlyCtrl) {

            scope.save = function () {

                speedlyCtrl.showed = false;
            }
        }

    }

})();