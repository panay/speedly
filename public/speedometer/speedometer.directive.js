(function () {

    angular.module('speedly')
        .directive('speedometer', speedometer);

    speedometer.$inject = ['$interval'];

    function speedometer($interval) {

        var directive = {
            restrict: 'EA',
            link: link,
            templateUrl: 'speedometer/speedometer.template.html',
            require: 'speedly'
        };

        return directive;

        function link(scope, element, attrs, speedlyCtrl) {

            var distance = 0,
                at = { x: null, y: null },
                speed = 0;

            scope.speed = 0;
            scope.canvSpeed = 0;
            scope.username = speedlyCtrl.username;
            scope.started = false;
            scope.timer = null;

            scope.results = [];

            scope.showSettings = function (event) {

                event.preventDefault();

                speedlyCtrl.showed = true;
            };

            scope.startTimer = function (event) {

                scope.time = parseInt(speedlyCtrl.timeSelected.value, 10);

                event.preventDefault();

                scope.started = true;
                scope.speed = 0;

                canvSpeed = 0;

                scope.timer = $interval(function () {
                    if (scope.time > 0) {
                        scope.time -= 1;
                    } else {
                        scope.stopTimer();
                    }
                }, 1000);
            };

            scope.stopTimer = function () {

                console.log('stop');

                scope.started = false;
                scope.speed = speed;

                distance = 0;
                speed = 0;

                if (angular.isDefined(scope.timer)) {
                    $interval.cancel(scope.timer);
                }

                scope.time = parseInt(speedlyCtrl.timeSelected.value, 10);

                scope.results.push({
                    username: speedlyCtrl.username,
                    speed: scope.speed
                });
            };

            scope.move = function (event) {
                if (at.x) {
                    distance += Math.sqrt(Math.pow(at.y - event.clientY, 2) + Math.pow(at.x - event.clientX, 2));
                    speed = Math.round(distance / speedlyCtrl.timeSelected.value);

                    var canvSpeed = Math.sqrt(Math.pow(at.y - event.clientY, 2) + Math.pow(at.x - event.clientX, 2));
                    scope.canvSpeed = canvSpeed;
                }

                at.x = event.clientX;
                at.y = event.clientY;
            };
        }
    }
})();