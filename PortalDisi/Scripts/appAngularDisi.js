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
});

app.controller("ctrlCarusel", function ($scope, $http, ngDialog, Campanias) {

    var values = [{ "Name": "Thomas", "Password": "thomasTheKing" },
            { "Name": "Linda", "Password": "lindatheQueen" },
            { "Name": "Ana", "Password": "lindatheQueen" },
            { "Name": "Luis", "Password": "lindatheQueen" }];

    Campanias.query(function (data) {
        $scope.campanias = data;
    });


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

    angular.forEach($scope.campanias, function (campa) {
        $scope.carusel.campania.push({
            "pk": "e021f394-64af-42a8-88ae-daa013f74397",
            "content": {
                "title": value.title,
                "mensaje": value.Password,
                "image": "campa1.jpg",
                "titulodet": "Titulo 2 Detalle",
                "infodet": "INFO DETALLE MENSAJE MENSAJE MENSAJE MENSAJE MENSAJE",
                "imagendet": "campa2.jpg"
            }
        });
    });
});

app.controller("ctrlCarusel2", function ($scope, Campanias) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'http://lorempixel.com/' + newWidth + '/300',
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
            id: currIndex++
        });
    };

    $scope.randomize = function() {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
    };

    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }

    // Randomize logic below

    function assignNewIndexesToSlides(indexes) {
        for (var i = 0, l = slides.length; i < l; i++) {
            slides[i].id = indexes.pop();
        }
    }

    function generateIndexesArray() {
        var indexes = [];
        for (var i = 0; i < currIndex; ++i) {
            indexes[i] = i;
        }
        return shuffle(indexes);
    }

    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
        var tmp, current, top = array.length;

        if (top) {
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }

        return array;
    }
});