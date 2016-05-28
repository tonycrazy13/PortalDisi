$(function () {
    $('#config').hide();

    $('#login-pass').focus();

    var myHub = $.connection.chatHub;

    $('#login-btn').click(function () {
        $('#login-alerts').text('');

        var agentPass = $('#login-pass').val();

        myHub.server.adminRequest(agentPass);
    });

    $('#save-button').click(function () {
        $('#save-alerts').text('');

        var adminPass = $('#main-pass').val();
        var agentPass = $('#agent-pass').val();
        var email = $('#email').val();

        if (adminPass == '') {
            $('#save-alerts').html('<div class="alert alert-warning">' +
                '<button type="button" class="close" data-dismiss="alert">×</button>' +
                '<strong>Error!</strong> Usted tiene que especificar la contraseña de Admin.</div>');

            return;
        }

        if (agentPass == '') {
            $('#save-alerts').html('<div class="alert alert-warning">' +
                '<button type="button" class="close" data-dismiss="alert">×</button>' +
                '<strong>Error!</strong> Usted tiene que especificar la contraseña del agente.</div>');

            return;
        }

        if (email == '') {
            $('#save-alerts').html('<div class="alert alert-warning">' +
                '<button type="button" class="close" data-dismiss="alert">×</button>' +
                '<strong>Error!</strong> Usted tiene que especificar el Email.</div>');

            return;
        }

        myHub.server.setConfig($('#save-button').data('id'), adminPass, agentPass, email);
    });

    myHub.client.installState = function (state, data) {
        if (!state) {
            $('#config').show();
            $('#login').hide();
            
        }

        $('#save-button').data('id', data);
    }

    myHub.client.adminResult = function (state, data) {
        if (state) {
            $('#login').hide();
            $('#config').show();

            $('#save-button').data('id', data);
        } else {
            $('#login-alerts').html('<div class="alert alert-error">' +
                '<button type="button" class="close" data-dismiss="alert">×</button>' +
                '<strong>Error!</strong> Indique el password correcto.</div>');
        }
    };

    myHub.client.setConfigResult = function (state, msg) {
        var boxType = state ? 'alert-success' : 'alert-error';
        var boxPrompt = state ? 'Guardado Exitoso' : 'Error al Guardar';

        $('#save-alerts').html('<div class="alert ' + boxType + '">' +
                '<button type="button" class="close" data-dismiss="alert">×</button>' +
                '<strong>' + boxPrompt + '</strong> ' + msg);
    };

    $.connection.hub.start()
            .done(function () {
                myHub.server.getInstallState();
            })
            .fail(function () { alert('unable to connect'); });
});