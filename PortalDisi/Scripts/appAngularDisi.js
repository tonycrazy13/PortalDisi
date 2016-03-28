'use strict';

var ws = angular.module('myApp.services', []);

ws.factory('Sucursales', ['$resource', function ($resource) {
        return $resource('/api/sucursales', {}, {
            query: { method: 'GET', params: {}, isArray: true }
        });
    }
]);
ws.factory('Campanias', ['$resource', function ($resource) {
    return $resource('/api/campanias', {}, {
        query: { method: 'GET', params: {}, isArray: true }
    });
}
]);

//ws.factory('CampaniaObj', ['key','$resource', function (key, $resource) {
//    return $resource('/api/campanias/:key', { key: key }, {
//        query: { method: 'GET', params: {}}
//    });
//}
//]);

var app = angular.module("myApp", ['ngCookies',
                                   'ngAnimate',
                                   'ngResource',
                                   'ngSanitize',
                                   'ngRoute',
                                   'ngDialog',
                                   'ngTouch',
                                   'ui.bootstrap',
                                   'ui.grid',
                                   'ui.grid.selection',
                                   'ui.grid.resizeColumns',
                                   'ui.grid.autoResize',
                                   'myApp.services']);
/**
app.config(function ($routeProvider) {
    $routeProvider
	    .when("/", {
	        controller: "ctrlGeneric",
	        templateUrl: "pages/home.html"
	    })
	    .when("/problema", {
	        controller: "ctrlGeneric",
	        templateUrl: "pages/problema.html"
	    })
	    .otherwise({
	        redirectTo: '/'
	    });
})
**/
app.controller("ctrlGeneric", function ($scope, $http, ngDialog, Sucursales, Campanias) {

    $scope.alerts = [];

    Sucursales.query(function (data) {
        $scope.sucursales = data;
    });

    Campanias.query(function (data) {
        $scope.campanias = data;
    });
    
    //CampaniaObj.query($scope.idCampaAct, function (data) {
    //    $scope.campaActual = data;
    //});

    $scope.addAlert = function (message) {
        $scope.alerts.push({ type: 'success', msg: message });
    };

    $scope.addError = function (error) {
        $scope.alerts.push({ type: 'danger', msg: error });
    };

    $scope.addWarning = function (error) {
        $scope.alerts.push({ type: 'warning', msg: error });
    };

    $scope.limpiaFormulario = function () {
        $scope.empresa = null;
        $scope.ocupacion = null;
        $scope.nombreContacto = null;
        $scope.correo = null;
        $scope.telFijo = null;
        $scope.telCel = null;
        $scope.comentario = null;
    };

    

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.formulario = function () {
        ngDialog.open({
            template: 'pages/formularioPopup.html',
            controller: 'ctrlGeneric',
            className: 'ngdialog-theme-default'//ngdialog-theme-custom
        });
    };

    $scope.formularioDetalle = function (obj) {
        $scope.campaActual = obj;
        ngDialog.open({
            template: 'pages/detallePopup.html',
            scope: $scope,
            controller: 'ctrlGeneric',
            className: 'ngdialog-theme-default'
        });
    };

    $scope.formulario = function () {
        ngDialog.open({
            template: 'pages/formularioPopup.html',
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
            celular: $scope.telCel,
            comentarios: $scope.comentario
        }
      $http.post('/api/formulario/Post', JSON.stringify(form))
         .success(function (data) {
             if (data == 'OK') {
                 $scope.addAlert("!!Solicitud Enviada Exitosamente!! Gracias por confiar en Disí");
                 $scope.limpiaFormulario();
             } else {
                 $scope.addWarning(data);
             }
             
         })
        .error(function (data) {
              $scope.addError("Error al Enviar la Solicitud, intente mas tarde");
        });
    }
});
