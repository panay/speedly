(function() {

    angular
        .module('speedly')
        .directive('speedly', speedly);

    speedly.$inject = ['settingsData'];

    function speedly($scope, settingsData) {

        var directive = {
            restrict: 'E',
            controllerAs: 'speedly',
            controller: speedlyCtrl
        };

        return directive;

        function speedlyCtrl($scope, settingsData) {

            return settingsData;
        }
    }

})();