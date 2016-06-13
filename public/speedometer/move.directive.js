(function() {

    angular
        .module('speedly')
        .directive('move', move);

    function move() {

        var directive = {
            link: link,
            scope: true,
            template: '<div class="field">водить мышкой здесь.</div>'
        };

        return directive;

        function link(scope, element, attrs) {
            
        }
    }

})();