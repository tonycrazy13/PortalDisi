'use strict';

var ws = angular.module('myApp.services', []);

ws.factory('Sucursales', ['$resource', function ($resource) {
        return $resource('/api/sucursales', {}, {
            query: { method: 'GET', params: {}, isArray: true }
        });
    }
]);

var app = angular.module("myApp", ['ngCookies',
                                   'ngAnimate',
                                   'ngResource',
                                   'ngSanitize',
                                   'ngRoute',
                                   'ngDialog',
                                   'ngTouch',
                                   'ui.grid',
                                   'ui.grid.selection',
                                   'ui.grid.resizeColumns',
                                   'ui.grid.autoResize',
                                   'myApp.services']);

app.config(function ($routeProvider) {
    $routeProvider
	    .when("/", {
	        controller: "ctrlGeneric",
	        templateUrl: "pages2/home.html"
	    })
	    .when("/problema", {
	        controller: "ctrlGeneric",
	        templateUrl: "pages2/problema.html"
	    })
	    .when("/solucion", {
	        controller: "ctrlGeneric",
	        templateUrl: "pages2/solucion.html"
	    })
	    .when("/productos", {
	        controller: "ctrlGeneric",
	        templateUrl: "pages2/productos.html"
	    })
	    .when("/nosotros", {
	        controller: "ctrlGeneric",
	        templateUrl: "pages2/nosotros.html"
	    })
	    .when("/aquisolucion", {
	        controller: "ctrlGeneric",
	        templateUrl: "pages2/aquisolucion.html"
	    })
        .when("/formulario", {
              controller: "ctrlGeneric",
              templateUrl: "pages2/formulario.html"
        })
        .when("/aviso", {
            controller: "ctrlGeneric",
            templateUrl: "pages2/aviso.html"
        })
	    .otherwise({
	        redirectTo: '/'
	    });
})
app.controller("ctrlGeneric", function ($scope, $http, ngDialog, Sucursales) {

    $scope.alerts = [];

    Sucursales.query(function (data) {
        $scope.sucursales = data;
    });

    $scope.addAlert = function (message) {
        $scope.alerts.push({ type: 'success', msg: message });
    };

    $scope.addError = function (error) {
        $scope.alerts.push({ type: 'danger', msg: error });
    };

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.formulario = function () {
        ngDialog.open({
            template: 'pages2/formularioPopup.html',
            controller: 'ctrlGeneric',
            className: 'ngdialog-theme-default'//ngdialog-theme-custom
        });
    };

    $scope.enviar = function () {
        var form = {
            empresa: $scope.empresa,
            ocupacion: $scope.ocupacion,
            nombre: $scope.nombreContacto,
            correo: $scope.correo,
            tel: $scope.telFijo,
            celular: $scope.telCel
        }
      $http.post('/api/formulario/Post', JSON.stringify(form))
          .success(function (data) {
              $scope.addAlert("!!Solicitud Enviada Exitosamente!! Gracias por confiar en Disí");
          })
        .error(function (data) {
              $scope.addError("Error al Enviar la Solicitud, intente mas tarde");
        });
    }
});
