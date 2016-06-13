(function () {

    angular
        .module('speedly')
        .factory('settingsData', settingsData);

    function settingsData() {

        return {
            username: 'Пользователь',
            times: [{
                value: '10',
                name: '10 сек'
            }, {
                    value: '15',
                    name: '15 сек'
                }, {
                    value: '30',
                    name: '30 сек'
                }],
            timeSelected: {
                value: '10',
                name: '10 сек'
            },
            showed: true
        };
    }

})();