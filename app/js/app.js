/*'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource','ngRoute'])


    });*/
'use strict';

var ekinApp = angular.module('ekinApp', ['ngRoute'])

    .config(function($routeProvider) {
        $routeProvider.when('/Login',
            {
                templateUrl:'templates/login.html',
                controller: 'login'
            });
        $routeProvider.when('/userdata',
            {
                templateUrl: 'templates/userdata.html',
                controller: 'login'
            });

        $routeProvider.when('/age',
            {
                templateUrl:'templates/age.html',
                controller: 'login'
            });
        $routeProvider.when('/height',
            {
                templateUrl: 'templates/height.html',
                controller: 'login'
            });
        $routeProvider.when('/weight',
            {
                templateUrl: 'templates/weight.html',
                controller: 'login'
            });
        $routeProvider.when('/smoking',
            {
                templateUrl: 'templates/smoking.html',
                controller: 'login'
            });

        $routeProvider.otherwise({redirectTo: '/Login'});
    });
