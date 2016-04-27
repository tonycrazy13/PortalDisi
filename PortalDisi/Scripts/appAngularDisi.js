﻿'use strict';

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

             /*
app.run(function ($rootScope) {
    $http.get('/api/campanias')
         .success(function (data) {
             var cont = 99;
             $scope.campanias = data;
             angular.forEach(data, function (campa) {

                 $scope.carusel.campania.push({
                     "pk": "e021f394-64af-42a8-88ae-daa013f74397" + cont++,
                     "content": {
                         "title": campa.titulo,
                         "mensaje": campa.mensaje,
                         "image": campa.imagen,
                         "titulodet": campa.titulodet,
                         "infodet": campa.infodet,
                         "imagendet": campa.imagendet
                     }
                 });
             });
         })
        .error(function (data) {
            $scope.addError("Error al Enviar la Solicitud, intente mas tarde");
        });
});
                 */
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
    /*
    Campanias.query(function (data) {
        $scope.campanias = data;
    });
    */
    $scope.carusel = { campania: [] };

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

    $scope.onLoad = function () {

        $http.get('/api/campanias')
        .success(function (data) {
            var cont = 99;
            angular.forEach(data, function (campa) {
                $scope.carusel.campania.push({
                    "pk": "e021f394-64af-42a8-88ae-daa013f74397" + cont++,
                    "content": {
                        "title": campa.titulo,
                        "mensaje": campa.mensaje,
                        "image": campa.imagen,
                        "titulodet": campa.titulodet,
                        "infodet": campa.infodet,
                        "imagendet": campa.imagendet
                    }
                });
            });
        })
       .error(function (data) {
           $scope.addError("Error al Enviar la Solicitud, intente mas tarde");
       });
    }

});

app.controller("ctrlCarusel", function ($scope, $http, ngDialog, Campanias) {
    /*
    $scope.carusel.campania.push({
        "pk": "e021f394-64af-42a8-88ae-daa013f74397",
        "content": {
            "title": "CAMPAÑA 2",
            "mensaje": "MENSAJE MENSAJE MENSAJE MENSAJE MENSAJE",
            "image": "campa2.jpg",
            "titulodet": "Titulo 2 Detalle",
            "infodet": "INFO DETALLE MENSAJE MENSAJE MENSAJE MENSAJE MENSAJE",
            "imagendet": "campa2.jpg"
        }
    });
  
    $scope.carusel.campania.push({
        "pk": "e021f394-64af-42a8-88ae-daa013f74397",
        "content": {
            "title": "CAMPAÑA 2",
            "mensaje": "MENSAJE MENSAJE MENSAJE MENSAJE MENSAJE",
            "image": "campa1.jpg",
            "titulodet": "Titulo 2 Detalle",
            "infodet": "INFO DETALLE MENSAJE MENSAJE MENSAJE MENSAJE MENSAJE",
            "imagendet": "campa2.jpg"
        }
    });
    /*
    */
    
    $http.get('/api/campanias')
        .success(function (data) {
            var cont = 99;
            angular.forEach(data, function (campa) {
                $scope.carusel.campania.push({
                    "pk": "e021f394-64af-42a8-88ae-daa013f74397" + cont++,
                    "content": {
                        "title": campa.titulo,
                        "mensaje": campa.mensaje,
                        "image": campa.imagen,
                        "titulodet": campa.titulodet,
                        "infodet": campa.infodet,
                        "imagendet": campa.imagendet
                    }
                });
            });
        })
       .error(function (data) {
           $scope.addError("Error al Enviar la Solicitud, intente mas tarde");
       });
    
    /**/
    /*
    Campanias.query(function (data){ 
        $scope.campanias = data;
        var cont = 99;
        angular.forEach($scope.campanias, function (campa) {
            $scope.allimages.campa.push({
                "$$hashKey":"object:" + cont++,
                "content": {
                    "fields": ["title", "mensaje", "image", "titulodet", "infodet", "imagendet"],
                    "title": campa.titulo,
                    "mensaje": "MENSAJE MENSAJE MENSAJE MENSAJE MENSAJE",
                    "image": "campa3.jpg",
                    "titulodet": "Titulo 3 Detalle",
                    "infodet": "INFO DETALLE MENSAJE MENSAJE MENSAJE MENSAJE MENSAJE",
                    "imagendet": "campa3.jpg"
                }
            });
        });
    }); 
    */
});
