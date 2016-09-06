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
                                   'ui.bootstrap',
                                   'ui.grid',
                                   'ui.grid.selection',
                                   'ui.grid.resizeColumns',
                                   'ui.grid.autoResize',
                                   'myApp.services']);

app.controller("ctrlGeneric", function ($scope, $http, ngDialog, Sucursales) {

    $scope.alerts = [];
    $scope.campaActual = [];

    Sucursales.query(function (data) {
        $scope.sucursales = data;
    });

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
            scope: $scope,
            data: obj,
            className: 'ngdialog-theme-default',
            template: 'pages/campanias_det.html'
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
              $scope.addError("Error al Enviar la Solicitud, intente más tarde");
          });
    }
});